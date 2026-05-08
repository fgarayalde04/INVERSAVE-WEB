import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { nombre, apellido, email, celular, edad, objetivo, aporte, source } = body;

  if (!nombre || !apellido || !email || !celular) {
    return NextResponse.json({ error: "Campos requeridos incompletos" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY not set — logging contact data");
    console.log("Contact:", { nombre, apellido, email, celular, edad, objetivo, aporte, source });
    return NextResponse.json({ ok: true });
  }

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#0C1A11;padding:24px 32px;border-radius:12px 12px 0 0">
        <h2 style="color:#fff;margin:0;font-size:20px">INVERSAVE — Nuevo contacto</h2>
        <p style="color:#8FD99A;margin:4px 0 0;font-size:13px">Desde: ${source || "web"}</p>
      </div>
      <div style="background:#F8F6F0;padding:32px;border-radius:0 0 12px 12px">
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#666;font-size:13px;width:40%">Nombre</td><td style="padding:8px 0;font-weight:600;font-size:13px">${nombre} ${apellido}</td></tr>
          <tr><td style="padding:8px 0;color:#666;font-size:13px">Email</td><td style="padding:8px 0;font-weight:600;font-size:13px"><a href="mailto:${email}" style="color:#1A6638">${email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#666;font-size:13px">Celular</td><td style="padding:8px 0;font-weight:600;font-size:13px">${celular}</td></tr>
          ${edad ? `<tr><td style="padding:8px 0;color:#666;font-size:13px">Edad</td><td style="padding:8px 0;font-weight:600;font-size:13px">${edad} años</td></tr>` : ""}
          ${objetivo ? `<tr><td style="padding:8px 0;color:#666;font-size:13px">Objetivo</td><td style="padding:8px 0;font-weight:600;font-size:13px">${objetivo}</td></tr>` : ""}
          ${aporte ? `<tr><td style="padding:8px 0;color:#666;font-size:13px">Aporte estimado</td><td style="padding:8px 0;font-weight:600;font-size:13px">${aporte}</td></tr>` : ""}
        </table>
      </div>
    </div>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: "INVERSAVE <onboarding@resend.dev>",
      to: ["fgarayaldearrillaga@roblecapital.net"],
      subject: `Nuevo contacto INVERSAVE — ${nombre} ${apellido}`,
      html,
      reply_to: email,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Error enviando email" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
