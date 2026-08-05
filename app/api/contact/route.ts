import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("❌ RESEND_API_KEY is missing");

      return NextResponse.json(
        {
          success: false,
          message: "Server configuration error.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = await req.json();

    const {
      fullName,
      companyName,
      email,
      mobile,
      city,
      state,
      product,
      quantity,
      message,
    } = body;

    // Validate required fields
    if (
      !fullName?.trim() ||
      !email?.trim() ||
      !mobile?.trim() ||
      !city?.trim() ||
      !state?.trim() ||
      !product?.trim() ||
      !quantity?.trim() ||
      !message?.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email address.",
        },
        { status: 400 }
      );
    }

    const businessEmail = process.env.CONTACT_EMAIL;

    if (!businessEmail) {
      console.error("❌ CONTACT_EMAIL is missing");

      return NextResponse.json(
        {
          success: false,
          message: "Business email is not configured.",
        },
        { status: 500 }
      );
    }

    // Generate Reference ID
    const now = new Date();

    const referenceId = `TES-${now.getFullYear()}${String(
      now.getMonth() + 1
    ).padStart(2, "0")}${String(now.getDate()).padStart(
      2,
      "0"
    )}-${Math.floor(1000 + Math.random() * 9000)}`;

    const { error } = await resend.emails.send({
      from: "TES Apparels <onboarding@resend.dev>",

      to: businessEmail,

      replyTo: email,

      subject: `New Enquiry | ${product} | ${referenceId}`,

      text: `
Reference ID : ${referenceId}

Name         : ${fullName}
Company      : ${companyName || "-"}
Email        : ${email}
Mobile       : ${mobile}
City         : ${city}
State        : ${state}
Product      : ${product}
Quantity     : ${quantity}

Message
------------------------------------------------

${message}
      `,

      html: `
      <div style="font-family:Arial,sans-serif;max-width:700px;margin:auto">

        <h2 style="color:#0B2341">
          New Website Enquiry
        </h2>

        <p>
          A new enquiry has been received from the TES Apparels website.
        </p>

        <table
          cellpadding="10"
          cellspacing="0"
          style="border-collapse:collapse;width:100%;border:1px solid #ddd;"
        >
          <tr>
            <td><strong>Reference ID</strong></td>
            <td>${referenceId}</td>
          </tr>

          <tr>
            <td><strong>Name</strong></td>
            <td>${fullName}</td>
          </tr>

          <tr>
            <td><strong>Company</strong></td>
            <td>${companyName || "-"}</td>
          </tr>

          <tr>
            <td><strong>Email</strong></td>
            <td>${email}</td>
          </tr>

          <tr>
            <td><strong>Mobile</strong></td>
            <td>${mobile}</td>
          </tr>

          <tr>
            <td><strong>City</strong></td>
            <td>${city}</td>
          </tr>

          <tr>
            <td><strong>State</strong></td>
            <td>${state}</td>
          </tr>

          <tr>
            <td><strong>Product</strong></td>
            <td>${product}</td>
          </tr>

          <tr>
            <td><strong>Estimated Quantity</strong></td>
            <td>${quantity}</td>
          </tr>
        </table>

        <h3 style="margin-top:30px;color:#0B2341">
          Customer Message
        </h3>

        <div
          style="
            background:#f7f7f7;
            padding:15px;
            border-left:4px solid #C49A00;
            white-space:pre-wrap;
          "
        >
${message}
        </div>

      </div>
      `,
    });

    if (error) {
      console.error("❌ Resend Error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to send enquiry.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully.",
      referenceId,
    });
  } catch (error) {
    console.error("❌ Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}