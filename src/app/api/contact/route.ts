import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const apiKey      = process.env.RESEND_API_KEY;
  const toEmail     = process.env.RESEND_TO_EMAIL;
  const fromEmail   = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

  console.log("RESEND_API_KEY configured:",   Boolean(apiKey));
  console.log("RESEND_TO_EMAIL configured:",  Boolean(toEmail));
  console.log("RESEND_FROM_EMAIL configured:", Boolean(process.env.RESEND_FROM_EMAIL));

  if (!apiKey) {
    return NextResponse.json({ success: false, error: "Missing RESEND_API_KEY" }, { status: 500 });
  }
  if (!toEmail) {
    return NextResponse.json({ success: false, error: "Missing RESEND_TO_EMAIL" }, { status: 500 });
  }

  const body = await req.json();
  const { nombre, apellido, email, celular, edad, objetivo, aporte, source } = body;

  if (!nombre || !apellido || !email || !celular) {
    return NextResponse.json({ success: false, error: "Campos requeridos incompletos" }, { status: 400 });
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
          ${edad    ? `<tr><td style="padding:8px 0;color:#666;font-size:13px">Edad</td><td style="padding:8px 0;font-weight:600;font-size:13px">${edad} años</td></tr>` : ""}
          ${objetivo ? `<tr><td style="padding:8px 0;color:#666;font-size:13px">Objetivo</td><td style="padding:8px 0;font-weight:600;font-size:13px">${objetivo}</td></tr>` : ""}
          ${aporte  ? `<tr><td style="padding:8px 0;color:#666;font-size:13px">Aporte estimado</td><td style="padding:8px 0;font-weight:600;font-size:13px">${aporte}</td></tr>` : ""}
        </table>
      </div>
    </div>
  `;

  const resend = new Resend(apiKey);

  const { data, error } = await resend.emails.send({
    from:     fromEmail,
    to:       toEmail,
    subject:  `Nuevo contacto INVERSAVE — ${nombre} ${apellido}`,
    html,
    replyTo:  email,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ success: false, error: "Email could not be sent" }, { status: 500 });
  }

  console.log("Email sent successfully:", data?.id);
  return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
}
