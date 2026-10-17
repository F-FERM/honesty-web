// app/api/contact/submit/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Prevent HTML injection in the email body
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const subject = String(body?.subject ?? "").trim();
    const message = String(body?.message ?? "").trim();

    // ---- Validation ----
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 },
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address" },
        { status: 400 },
      );
    }

    if (
      name.length > 100 ||
      email.length > 150 ||
      subject.length > 150 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { message: "One or more fields are too long" },
        { status: 400 },
      );
    }

    // ---- Transporter ----
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
    const sentAt = new Date().toLocaleString("en-GB", {
      timeZone: "Asia/Dubai",
    });

    const mailOptions = {
      from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`, // reply goes straight to the sender
      subject: `[Contact] ${subject.replace(/[\r\n]+/g, " ")}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              h2 { color: #0D85CC; border-bottom: 2px solid #0D85CC; padding-bottom: 10px; }
              .field { margin: 15px 0; }
              .label { font-weight: bold; color: #555; }
              .value { margin-top: 5px; padding: 10px; background: #f5f5f5; border-radius: 5px; }
              .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #888; }
            </style>
          </head>
          <body>
            <div class="container">
              <h2>📧 New Contact Form Submission</h2>
              <p>A new message has been received from your website contact form.</p>

              <div class="field">
                <div class="label">👤 Name</div>
                <div class="value">${safeName}</div>
              </div>

              <div class="field">
                <div class="label">✉️ Email</div>
                <div class="value"><a href="mailto:${safeEmail}">${safeEmail}</a></div>
              </div>

              <div class="field">
                <div class="label">📝 Subject</div>
                <div class="value">${safeSubject}</div>
              </div>

              <div class="field">
                <div class="label">💬 Message</div>
                <div class="value">${safeMessage}</div>
              </div>

              <div class="footer">
                <p>This email was sent from the Honesty &amp; Perfection Group website contact form.</p>
                <p>Sent at: ${sentAt}</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}

Sent at: ${sentAt}
      `.trim(),
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send message. Please try again." },
      { status: 500 },
    );
  }
}