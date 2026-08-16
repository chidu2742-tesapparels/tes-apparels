import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // --------------------------------------------------
    // Resend API Key
    // --------------------------------------------------

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

    // --------------------------------------------------
    // Read request body
    // --------------------------------------------------

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

    // --------------------------------------------------
    // Required field validation
    // --------------------------------------------------

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

    // --------------------------------------------------
    // Email validation
    // --------------------------------------------------

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

    // --------------------------------------------------
    // Business email
    // IMPORTANT:
    // Vercel environment variable:
    // BUSINESS_EMAIL = chidu2742@gmail.com
    // --------------------------------------------------

    const businessEmail = process.env.BUSINESS_EMAIL;

    if (!businessEmail) {
      console.error("❌ BUSINESS_EMAIL is missing");

      return NextResponse.json(
        {
          success: false,
          message: "Business email is not configured.",
        },
        { status: 500 }
      );
    }

    // --------------------------------------------------
    // Generate enquiry reference ID
    // --------------------------------------------------

    const now = new Date();

    const referenceId = `TES-${now.getFullYear()}${String(
      now.getMonth() + 1
    ).padStart(2, "0")}${String(now.getDate()).padStart(
      2,
      "0"
    )}-${Math.floor(1000 + Math.random() * 9000)}`;

    // --------------------------------------------------
    // Send enquiry email
    // --------------------------------------------------

    const { error } = await resend.emails.send({
      from: "TES Apparels <onboarding@resend.dev>",

      // Enquiries go to:
      // chidu2742@gmail.com
      to: businessEmail,

      // Replying from Gmail will reply to the customer
      replyTo: email,

      subject: `New Enquiry | ${product} | ${referenceId}`,

      // ------------------------------------------------
      // Plain text email
      // ------------------------------------------------

      text: `
TES APPARELS
New Website Enquiry

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
-------
${message}

------------------------------------------
TES Apparels
Corporate & Sports Apparel Manufacturer
Bengaluru, India
------------------------------------------
      `,

      // ------------------------------------------------
      // HTML email
      // ------------------------------------------------

      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            max-width: 700px;
            margin: 0 auto;
            color: #333333;
            background: #ffffff;
          "
        >

          <!-- Header -->

          <div
            style="
              background: #0B2341;
              padding: 24px;
              text-align: center;
            "
          >

            <h2
              style="
                color: #ffffff;
                margin: 0;
                font-size: 24px;
              "
            >
              TES Apparels
            </h2>

            <p
              style="
                color: #C49A00;
                margin: 8px 0 0;
                font-size: 14px;
                font-weight: bold;
              "
            >
              New Website Enquiry
            </p>

          </div>

          <!-- Main Content -->

          <div style="padding: 24px;">

            <p
              style="
                font-size: 15px;
                line-height: 1.6;
              "
            >
              A new enquiry has been received from the
              TES Apparels website.
            </p>

            <!-- Enquiry Details -->

            <table
              cellpadding="10"
              cellspacing="0"
              style="
                border-collapse: collapse;
                width: 100%;
                border: 1px solid #dddddd;
                font-size: 14px;
              "
            >

              <tr>
                <td
                  style="
                    border: 1px solid #dddddd;
                    background: #f7f7f7;
                    width: 35%;
                  "
                >
                  <strong>Reference ID</strong>
                </td>

                <td style="border: 1px solid #dddddd;">
                  ${referenceId}
                </td>
              </tr>

              <tr>
                <td
                  style="
                    border: 1px solid #dddddd;
                    background: #f7f7f7;
                  "
                >
                  <strong>Name</strong>
                </td>

                <td style="border: 1px solid #dddddd;">
                  ${fullName}
                </td>
              </tr>

              <tr>
                <td
                  style="
                    border: 1px solid #dddddd;
                    background: #f7f7f7;
                  "
                >
                  <strong>Company</strong>
                </td>

                <td style="border: 1px solid #dddddd;">
                  ${companyName || "-"}
                </td>
              </tr>

              <tr>
                <td
                  style="
                    border: 1px solid #dddddd;
                    background: #f7f7f7;
                  "
                >
                  <strong>Email</strong>
                </td>

                <td style="border: 1px solid #dddddd;">
                  ${email}
                </td>
              </tr>

              <tr>
                <td
                  style="
                    border: 1px solid #dddddd;
                    background: #f7f7f7;
                  "
                >
                  <strong>Mobile</strong>
                </td>

                <td style="border: 1px solid #dddddd;">
                  ${mobile}
                </td>
              </tr>

              <tr>
                <td
                  style="
                    border: 1px solid #dddddd;
                    background: #f7f7f7;
                  "
                >
                  <strong>City</strong>
                </td>

                <td style="border: 1px solid #dddddd;">
                  ${city}
                </td>
              </tr>

              <tr>
                <td
                  style="
                    border: 1px solid #dddddd;
                    background: #f7f7f7;
                  "
                >
                  <strong>State</strong>
                </td>

                <td style="border: 1px solid #dddddd;">
                  ${state}
                </td>
              </tr>

              <tr>
                <td
                  style="
                    border: 1px solid #dddddd;
                    background: #f7f7f7;
                  "
                >
                  <strong>Product</strong>
                </td>

                <td style="border: 1px solid #dddddd;">
                  ${product}
                </td>
              </tr>

              <tr>
                <td
                  style="
                    border: 1px solid #dddddd;
                    background: #f7f7f7;
                  "
                >
                  <strong>Estimated Quantity</strong>
                </td>

                <td style="border: 1px solid #dddddd;">
                  ${quantity}
                </td>
              </tr>

            </table>

            <!-- Customer Message -->

            <h3
              style="
                margin-top: 30px;
                margin-bottom: 12px;
                color: #0B2341;
              "
            >
              Customer Message
            </h3>

            <div
              style="
                background: #f7f7f7;
                padding: 15px;
                border-left: 4px solid #C49A00;
                white-space: pre-wrap;
                line-height: 1.6;
                font-size: 14px;
              "
            >
              ${message}
            </div>

            <!-- Reference -->

            <div
              style="
                margin-top: 25px;
                padding: 15px;
                background: #fff8dc;
                border-radius: 6px;
              "
            >

              <strong style="color: #0B2341;">
                Enquiry Reference:
              </strong>

              <span>
                ${referenceId}
              </span>

            </div>

          </div>

          <!-- Footer -->

          <div
            style="
              background: #0B2341;
              padding: 18px;
              text-align: center;
            "
          >

            <p
              style="
                color: #ffffff;
                margin: 0;
                font-size: 12px;
              "
            >
              TES Apparels | Corporate & Sports Apparel Manufacturer
            </p>

            <p
              style="
                color: #C49A00;
                margin: 6px 0 0;
                font-size: 11px;
              "
            >
              Bengaluru, India
            </p>

          </div>

        </div>
      `,
    });

    // --------------------------------------------------
    // Resend error handling
    // --------------------------------------------------

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

    // --------------------------------------------------
    // Success
    // --------------------------------------------------

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