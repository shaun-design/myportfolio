import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // ── Integrate your email service here ─────────────────────────────────────
    //
    // Option A: Resend  (https://resend.com)
    //   npm install resend
    //   Add RESEND_API_KEY to .env.local
    //
    //   import { Resend } from "resend";
    //   const resend = new Resend(process.env.RESEND_API_KEY);
    //   await resend.emails.send({
    //     from: "no-reply@yourdomain.com",
    //     to: "you@yourdomain.com",
    //     subject: `Contact: ${subject}`,
    //     html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
    //   });
    //
    // Option B: Nodemailer with SMTP
    // Option C: SendGrid, Postmark, Loops, etc.
    // ──────────────────────────────────────────────────────────────────────────

    console.log("Contact form submission:", { name, email, subject, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
