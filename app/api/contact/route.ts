import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing");

      return NextResponse.json(
        {
          success: false,
          error: "Server configuration error",
        },
        {
          status: 500,
        }
      );
    }

    const resend = new Resend(apiKey);

    const { name, company, email, phone, message } = await req.json();

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

    await resend.emails.send({
      from: "TES Apparels <onboarding@resend.dev>",
      to: email,
      subject: "Thank you for contacting TES Apparels",
      html: `
        <div style="font-family:Arial,sans-serif;">
          <h2>Thank You ${name}!</h2>

          <p>We have received your enquiry.</p>

          <p>Our team will contact you shortly.</p>

          <hr>

          <p><strong>TES APPARELS</strong></p>

          <p>📞 +91 9972548910</p>

          <p>✉ chidanand@tesapparels.com</p>
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