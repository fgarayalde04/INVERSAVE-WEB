import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  const rawUrl = req.nextUrl.searchParams.get("url");

  if (!rawUrl) {
    return NextResponse.json({ success: false, image: null }, { status: 400 });
  }

  let url: URL;
  try {
    url = new URL(rawUrl);
    if (!["http:", "https:"].includes(url.protocol)) throw new Error("bad protocol");
  } catch {
    return NextResponse.json({ success: false, image: null }, { status: 400 });
  }

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 5000);

    const res = await fetch(url.toString(), {
      signal: controller.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; INVERSAVE-Bot/1.0; +https://inversave.com)",
        Accept: "text/html,application/xhtml+xml",
      },
    });
    clearTimeout(timer);

    if (!res.ok) {
      return NextResponse.json({ success: false, image: null });
    }

    const html = await res.text();

    const image = extractMeta(html, ["og:image", "twitter:image"]);
    const title = extractMeta(html, ["og:title", "twitter:title"]);
    const description = extractMeta(html, ["og:description", "twitter:description"]);

    const response = NextResponse.json({
      success: true,
      image: image ?? null,
      title: title ?? null,
      description: description ?? null,
    });

    response.headers.set(
      "Cache-Control",
      "s-maxage=86400, stale-while-revalidate=604800"
    );

    return response;
  } catch {
    return NextResponse.json({ success: false, image: null });
  }
}

function extractMeta(html: string, names: string[]): string | null {
  for (const name of names) {
    const patterns = [
      new RegExp(
        `<meta[^>]+(?:property|name)=["']${name}["'][^>]+content=["']([^"']+)["']`,
        "i"
      ),
      new RegExp(
        `<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["']${name}["']`,
        "i"
      ),
    ];
    for (const re of patterns) {
      const m = html.match(re);
      if (m?.[1]) return m[1].trim();
    }
  }
  return null;
}
