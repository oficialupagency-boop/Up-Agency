import { NextRequest, NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  company?: string;
  role?: string;
  phone?: string;
  email?: string;
  message?: string;
};

export async function POST(request: NextRequest) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido." }, { status: 400 });
  }

  const { name, company, role, phone, email } = body;

  if (!name || !company || !role || !phone || !email) {
    return NextResponse.json(
      { error: "Preencha todos os campos obrigatórios." },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Email inválido." }, { status: 400 });
  }

  // Integration point: forward to CRM, email provider, or webhook here.
  // Kept provider-agnostic so it can be wired to HubSpot, RD Station,
  // Resend, or a Slack webhook without changing the form component.
  console.log("Novo lead — Diagnóstico Estratégico:", body);

  return NextResponse.json({ ok: true }, { status: 200 });
}
