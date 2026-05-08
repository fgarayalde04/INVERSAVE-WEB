import { NextResponse } from "next/server";

/**
 * GET /api/spy-data?range=max|10y|5y|1y
 *
 * Fetches real SPY (SPDR S&P 500 ETF Trust) historical data
 * from Yahoo Finance v8 API — no API key required.
 *
 * Series used: Adjusted Close (adjclose)
 * Adjusted for dividends and splits — best representation of
 * total return performance for long-term analysis.
 *
 * SPY inception: January 29, 1993
 */

export interface SPYDataPoint {
  date: string;        // ISO date string "YYYY-MM-DD"
  close: number;       // Adjusted close price (USD)
  returnPct: number;   // Cumulative return % from first data point
}

const RANGE_MAP: Record<string, string> = {
  "1y":  "1y",
  "5y":  "5y",
  "10y": "10y",
  "max": "max",
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const range = RANGE_MAP[searchParams.get("range") ?? "max"] ?? "max";

  try {
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/SPY?interval=1mo&range=${range}`;
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0" },
      next: { revalidate: 86400 }, // cache 24h
    });

    if (!res.ok) throw new Error(`Yahoo Finance returned ${res.status}`);

    const json = await res.json();
    const result = json?.chart?.result?.[0];
    if (!result) throw new Error("No result in Yahoo Finance response");

    const timestamps: number[]     = result.timestamp;
    const adjClose: (number|null)[] = result.indicators.adjclose[0].adjclose;

    // Build clean data array, filtering null values
    const raw: { ts: number; close: number }[] = [];
    for (let i = 0; i < timestamps.length; i++) {
      const c = adjClose[i];
      if (c !== null && c !== undefined && c > 0) {
        raw.push({ ts: timestamps[i], close: c });
      }
    }

    if (raw.length === 0) throw new Error("Empty data set from Yahoo Finance");

    const firstClose = raw[0].close;

    const data: SPYDataPoint[] = raw.map(({ ts, close }) => ({
      date: new Date(ts * 1000).toISOString().slice(0, 10),
      close: Math.round(close * 100) / 100,
      returnPct: Math.round(((close - firstClose) / firstClose) * 10000) / 100,
    }));

    return NextResponse.json({
      data,
      meta: {
        ticker: "SPY",
        series: "Adjusted Close",
        inception: "1993-01-29",
        range,
        points: data.length,
        firstDate: data[0].date,
        lastDate:  data[data.length - 1].date,
        firstClose: data[0].close,
        lastClose:  data[data.length - 1].close,
        totalReturn: data[data.length - 1].returnPct,
      },
    });

  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
