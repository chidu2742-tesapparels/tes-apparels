import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Prevent build failure if API key is missing
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing");

      return NextResponse.json(
        {
          success: false,
          error: "Email service is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    const resend = new Resend(apiKey);

    const { name, company, email, phone, message } = await req.json();

    // Send email to TES Apparels
    const result = await resend.emails.send({
      from: "TES Apparels <onboarding@resend.dev>",
      to: "chidu2742@gmail.com",
      subject: `New Quote Request from ${name}`,
      html: `
        <h2>New Quote Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <p><strong>Requirement:</strong></p>

        <p>${message}</p>
      `,
    });

    if (result.error) {
      console.error(result.error);

      return NextResponse.json(
        {
          success: false,
          error: result.error,
        },
        {
          status: 500,
        }
      );
    }

    // Auto reply to customer
    await resend.emails.send({
      from: "TES Apparels <onboarding@resend.dev>",
      to: email,
      subject: "Thank you for contacting TES Apparels",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;line-height:1.7;">

          <h2 style="color:#0B2341;">
            Thank You, ${name}!
          </h2>

          <p>We have successfully received your enquiry.</p>

          <p>Our team will review your requirements and get back to you shortly.</p>

          <hr>

          <h3>TES APPARELS</h3>

          <p>Premium Corporate Uniform Manufacturer</p>

          <p>📞 +91 9972548910</p>

          <p>✉ chidanand@tesapparels.com</p>

          <p>
            No.483, 2nd Floor,<br/>
            3rd Stage,<br/>
            Basaveshwar Nagar,<br/>
            Bengaluru – 560079
          </p>

          <hr>

          <p style="color:gray;font-size:13px;">
            This is an automated confirmation email.
          </p>

        </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}