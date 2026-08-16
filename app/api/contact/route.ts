import { Resend } from "resend";
import { NextResponse } from "next/server";

import {
  validateName,
  validateCompany,
  validateEmail,
  validatePhone,
  validateMessage,
} from "../../lib/validation";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    /* =====================================================
       ENVIRONMENT VARIABLES
    ===================================================== */

    const apiKey = process.env.RESEND_API_KEY;

    const businessEmail =
      process.env.CONTACT_EMAIL || "chidanand@tesapparels.com";

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

    const resend = new Resend(apiKey);

    /* =====================================================
       READ REQUEST
    ===================================================== */

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

    /* =====================================================
       BASIC REQUIRED FIELD VALIDATION
    ===================================================== */

    if (
      typeof fullName !== "string" ||
      typeof email !== "string" ||
      typeof mobile !== "string" ||
      typeof city !== "string" ||
      typeof state !== "string" ||
      typeof product !== "string" ||
      typeof quantity !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    /* =====================================================
       REUSABLE VALIDATION
    ===================================================== */

    const nameError = validateName(fullName);

    if (nameError) {
      return NextResponse.json(
        {
          success: false,
          message: nameError,
        },
        { status: 400 }
      );
    }

    const companyError = validateCompany(
      typeof companyName === "string" ? companyName : ""
    );

    if (companyError) {
      return NextResponse.json(
        {
          success: false,
          message: companyError,
        },
        { status: 400 }
      );
    }

    const emailError = validateEmail(email);

    if (emailError) {
      return NextResponse.json(
        {
          success: false,
          message: emailError,
        },
        { status: 400 }
      );
    }

    const phoneError = validatePhone(mobile);

    if (phoneError) {
      console.warn(
        "⚠️ Invalid phone number rejected:",
        mobile
      );

      return NextResponse.json(
        {
          success: false,
          message: phoneError,
        },
        { status: 400 }
      );
    }

    const messageError = validateMessage(message);

    if (messageError) {
      return NextResponse.json(
        {
          success: false,
          message: messageError,
        },
        { status: 400 }
      );
    }

    /* =====================================================
       ADDITIONAL FIELD LENGTH PROTECTION
    ===================================================== */

    const cleanFullName = fullName.trim();

    const cleanCompanyName =
      typeof companyName === "string"
        ? companyName.trim()
        : "";

    const cleanEmail = email.trim().toLowerCase();

    const cleanMobile = mobile.trim();

    const cleanCity = city.trim();

    const cleanState = state.trim();

    const cleanProduct = product.trim();

    const cleanQuantity = quantity.trim();

    const cleanMessage = message.trim();

    if (cleanCompanyName.length > 150) {
      return NextResponse.json(
        {
          success: false,
          message: "Company name is too long.",
        },
        { status: 400 }
      );
    }

    if (cleanCity.length < 2 || cleanCity.length > 100) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid city.",
        },
        { status: 400 }
      );
    }

    if (cleanState.length < 2 || cleanState.length > 100) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid state.",
        },
        { status: 400 }
      );
    }

    if (cleanProduct.length < 2 || cleanProduct.length > 150) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid product.",
        },
        { status: 400 }
      );
    }

    if (cleanQuantity.length < 1 || cleanQuantity.length > 100) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid quantity.",
        },
        { status: 400 }
      );
    }

    /* =====================================================
       GENERATE ENQUIRY REFERENCE NUMBER
    ===================================================== */

    const now = new Date();

    const referenceId =
      `TES-${now.getFullYear()}` +
      `${String(now.getMonth() + 1).padStart(2, "0")}` +
      `${String(now.getDate()).padStart(2, "0")}` +
      `-${Math.floor(1000 + Math.random() * 9000)}`;

    /* =====================================================
       SAFE HTML VALUES
    ===================================================== */

    const safeReferenceId =
      escapeHtml(referenceId);

    const safeFullName =
      escapeHtml(cleanFullName);

    const safeCompanyName =
      escapeHtml(cleanCompanyName || "-");

    const safeEmail =
      escapeHtml(cleanEmail);

    const safeMobile =
      escapeHtml(cleanMobile);

    const safeCity =
      escapeHtml(cleanCity);

    const safeState =
      escapeHtml(cleanState);

    const safeProduct =
      escapeHtml(cleanProduct);

    const safeQuantity =
      escapeHtml(cleanQuantity);

    const safeMessage =
      escapeHtml(cleanMessage);

    /* =====================================================
       1. SEND ENQUIRY TO TES APPARELS
    ===================================================== */

    const { error: enquiryError } =
      await resend.emails.send({
        from:
          "TES Apparels <chidanand@tesapparels.com>",

        to: businessEmail,

        replyTo: cleanEmail,

        subject:
          `New Website Enquiry | ${cleanProduct} | ${referenceId}`,

        text: `
TES APPARELS
NEW WEBSITE ENQUIRY

Reference ID: ${referenceId}

CUSTOMER DETAILS
----------------
Name: ${cleanFullName}
Company: ${cleanCompanyName || "-"}
Email: ${cleanEmail}
Mobile: ${cleanMobile}
City: ${cleanCity}
State: ${cleanState}

REQUIREMENT
-----------
Product: ${cleanProduct}
Estimated Quantity: ${cleanQuantity}

MESSAGE
-------
${cleanMessage}

----------------------------------------
TES Apparels
Corporate & Sports Apparel Manufacturer
Bengaluru, Karnataka, India

Email: chidanand@tesapparels.com
Website: https://tesapparels.com
----------------------------------------
        `,

        html: `
<div
  style="
    margin:0;
    padding:0;
    background:#f4f6f8;
    font-family:Arial,Helvetica,sans-serif;
    color:#333333;
  "
>
  <div
    style="
      max-width:720px;
      margin:30px auto;
      background:#ffffff;
      border-radius:10px;
      overflow:hidden;
      box-shadow:0 2px 10px rgba(0,0,0,0.08);
    "
  >

    <!-- Header -->

    <div
      style="
        background:#0B2341;
        padding:28px 25px;
        text-align:center;
      "
    >
      <h1
        style="
          margin:0;
          color:#ffffff;
          font-size:26px;
        "
      >
        TES APPARELS
      </h1>

      <p
        style="
          margin:8px 0 0;
          color:#C49A00;
          font-size:14px;
          font-weight:bold;
        "
      >
        NEW WEBSITE ENQUIRY
      </p>
    </div>

    <!-- Content -->

    <div style="padding:30px;">

      <p style="font-size:15px;line-height:1.6;">
        A new enquiry has been received through the
        <strong>TES Apparels website</strong>.
      </p>

      <!-- Reference -->

      <div
        style="
          background:#f8f9fa;
          border-left:4px solid #C49A00;
          padding:15px;
          margin:20px 0;
        "
      >
        <strong style="color:#0B2341;">
          Reference ID
        </strong>

        <div
          style="
            margin-top:5px;
            font-size:18px;
            font-weight:bold;
            color:#C49A00;
          "
        >
          ${safeReferenceId}
        </div>
      </div>

      <!-- Customer Details -->

      <h2
        style="
          color:#0B2341;
          font-size:19px;
          margin:25px 0 12px;
        "
      >
        Customer Details
      </h2>

      <table
        cellpadding="10"
        cellspacing="0"
        width="100%"
        style="
          border-collapse:collapse;
          font-size:14px;
        "
      >
        <tr>
          <td
            style="
              border:1px solid #dddddd;
              background:#f7f7f7;
              width:35%;
            "
          >
            <strong>Name</strong>
          </td>

          <td style="border:1px solid #dddddd;">
            ${safeFullName}
          </td>
        </tr>

        <tr>
          <td
            style="
              border:1px solid #dddddd;
              background:#f7f7f7;
            "
          >
            <strong>Company</strong>
          </td>

          <td style="border:1px solid #dddddd;">
            ${safeCompanyName}
          </td>
        </tr>

        <tr>
          <td
            style="
              border:1px solid #dddddd;
              background:#f7f7f7;
            "
          >
            <strong>Email</strong>
          </td>

          <td style="border:1px solid #dddddd;">
            ${safeEmail}
          </td>
        </tr>

        <tr>
          <td
            style="
              border:1px solid #dddddd;
              background:#f7f7f7;
            "
          >
            <strong>Mobile</strong>
          </td>

          <td style="border:1px solid #dddddd;">
            ${safeMobile}
          </td>
        </tr>

        <tr>
          <td
            style="
              border:1px solid #dddddd;
              background:#f7f7f7;
            "
          >
            <strong>Location</strong>
          </td>

          <td style="border:1px solid #dddddd;">
            ${safeCity}, ${safeState}
          </td>
        </tr>
      </table>

      <!-- Requirement -->

      <h2
        style="
          color:#0B2341;
          font-size:19px;
          margin:30px 0 12px;
        "
      >
        Requirement
      </h2>

      <table
        cellpadding="10"
        cellspacing="0"
        width="100%"
        style="
          border-collapse:collapse;
          font-size:14px;
        "
      >
        <tr>
          <td
            style="
              border:1px solid #dddddd;
              background:#f7f7f7;
              width:35%;
            "
          >
            <strong>Product</strong>
          </td>

          <td style="border:1px solid #dddddd;">
            ${safeProduct}
          </td>
        </tr>

        <tr>
          <td
            style="
              border:1px solid #dddddd;
              background:#f7f7f7;
            "
          >
            <strong>Estimated Quantity</strong>
          </td>

          <td style="border:1px solid #dddddd;">
            ${safeQuantity}
          </td>
        </tr>
      </table>

      <!-- Message -->

      <h2
        style="
          color:#0B2341;
          font-size:19px;
          margin:30px 0 12px;
        "
      >
        Customer Message
      </h2>

      <div
        style="
          background:#f7f7f7;
          border-left:4px solid #C49A00;
          padding:18px;
          line-height:1.7;
          white-space:pre-wrap;
          font-size:14px;
        "
      >
        ${safeMessage}
      </div>

    </div>

    <!-- Footer -->

    <div
      style="
        background:#0B2341;
        padding:20px;
        text-align:center;
      "
    >
      <p
        style="
          margin:0;
          color:#ffffff;
          font-size:13px;
          font-weight:bold;
        "
      >
        TES Apparels
      </p>

      <p
        style="
          margin:6px 0 0;
          color:#d8dee7;
          font-size:12px;
        "
      >
        Corporate & Sports Apparel Manufacturer
      </p>

      <p
        style="
          margin:6px 0 0;
          color:#d8dee7;
          font-size:12px;
        "
      >
        Bengaluru, Karnataka, India
      </p>
    </div>

  </div>
</div>
        `,
      });

    /* =====================================================
       CHECK BUSINESS EMAIL DELIVERY
    ===================================================== */

    if (enquiryError) {
      console.error(
        "❌ Resend enquiry error:",
        enquiryError
      );

      return NextResponse.json(
        {
          success: false,
          message: "Unable to send enquiry.",
        },
        { status: 500 }
      );
    }

    /* =====================================================
       2. AUTOMATIC CUSTOMER ACKNOWLEDGEMENT
    ===================================================== */

    const { error: autoReplyError } =
      await resend.emails.send({
        from:
          "TES Apparels <chidanand@tesapparels.com>",

        to: cleanEmail,

        replyTo: businessEmail,

        subject:
          `Thank You for Your Enquiry | ${referenceId} | TES Apparels`,

        text: `
Dear ${cleanFullName},

Thank you for contacting TES Apparels.

We have successfully received your enquiry.

Your enquiry reference number is:

${referenceId}

REQUIREMENT
-----------
Product: ${cleanProduct}
Estimated Quantity: ${cleanQuantity}

Our team will review your requirement and get back to you shortly.

For any additional information, simply reply to this email.

Regards,

TES Apparels
Corporate & Sports Apparel Manufacturer

Bengaluru, Karnataka, India

Email: chidanand@tesapparels.com
Website: https://tesapparels.com

This is an automatic acknowledgement email.
Please keep your reference number for future communication.
        `,

        html: `
<div
  style="
    margin:0;
    padding:0;
    background:#f4f6f8;
    font-family:Arial,Helvetica,sans-serif;
    color:#333333;
  "
>
  <div
    style="
      max-width:650px;
      margin:30px auto;
      background:#ffffff;
      border-radius:10px;
      overflow:hidden;
      box-shadow:0 2px 10px rgba(0,0,0,0.08);
    "
  >

    <!-- Header -->

    <div
      style="
        background:#0B2341;
        padding:30px 25px;
        text-align:center;
      "
    >
      <h1
        style="
          margin:0;
          color:#ffffff;
          font-size:26px;
        "
      >
        TES APPARELS
      </h1>

      <p
        style="
          margin:8px 0 0;
          color:#C49A00;
          font-size:14px;
          font-weight:bold;
        "
      >
        ENQUIRY RECEIVED
      </p>
    </div>

    <!-- Main -->

    <div style="padding:30px;">

      <p
        style="
          font-size:16px;
          line-height:1.7;
          margin-top:0;
        "
      >
        Dear <strong>${safeFullName}</strong>,
      </p>

      <p
        style="
          font-size:15px;
          line-height:1.7;
        "
      >
        Thank you for contacting
        <strong>TES Apparels</strong>.
        We have successfully received your enquiry.
      </p>

      <!-- Reference -->

      <div
        style="
          background:#f8f9fa;
          border-left:4px solid #C49A00;
          padding:20px;
          margin:25px 0;
        "
      >
        <p
          style="
            margin:0;
            color:#666666;
            font-size:13px;
          "
        >
          Your Enquiry Reference Number
        </p>

        <p
          style="
            margin:8px 0 0;
            color:#0B2341;
            font-size:22px;
            font-weight:bold;
          "
        >
          ${safeReferenceId}
        </p>
      </div>

      <!-- Requirement -->

      <h2
        style="
          color:#0B2341;
          font-size:18px;
          margin:28px 0 12px;
        "
      >
        Your Requirement
      </h2>

      <table
        cellpadding="10"
        cellspacing="0"
        width="100%"
        style="
          border-collapse:collapse;
          font-size:14px;
        "
      >
        <tr>
          <td
            style="
              border:1px solid #dddddd;
              background:#f7f7f7;
              width:40%;
            "
          >
            <strong>Product</strong>
          </td>

          <td style="border:1px solid #dddddd;">
            ${safeProduct}
          </td>
        </tr>

        <tr>
          <td
            style="
              border:1px solid #dddddd;
              background:#f7f7f7;
            "
          >
            <strong>Estimated Quantity</strong>
          </td>

          <td style="border:1px solid #dddddd;">
            ${safeQuantity}
          </td>
        </tr>
      </table>

      <p
        style="
          margin-top:28px;
          font-size:15px;
          line-height:1.7;
        "
      >
        Our team will review your requirement and get back to you shortly.
      </p>

      <p
        style="
          font-size:15px;
          line-height:1.7;
        "
      >
        If you need to provide additional information,
        simply <strong>reply to this email</strong>.
      </p>

      <p
        style="
          margin-top:30px;
          font-size:15px;
          line-height:1.7;
        "
      >
        Thank you for considering
        <strong>TES Apparels</strong>.
      </p>

      <!-- Signature -->

      <div
        style="
          margin-top:30px;
          padding-top:20px;
          border-top:1px solid #eeeeee;
        "
      >
        <p
          style="
            margin:0;
            color:#0B2341;
            font-weight:bold;
            font-size:16px;
          "
        >
          TES Apparels
        </p>

        <p
          style="
            margin:5px 0;
            color:#666666;
            font-size:13px;
          "
        >
          Corporate & Sports Apparel Manufacturer
        </p>

        <p
          style="
            margin:5px 0;
            color:#666666;
            font-size:13px;
          "
        >
          Bengaluru, Karnataka, India
        </p>

        <p
          style="
            margin:5px 0;
            color:#666666;
            font-size:13px;
          "
        >
          chidanand@tesapparels.com
        </p>
      </div>

    </div>

    <!-- Footer -->

    <div
      style="
        background:#0B2341;
        padding:18px;
        text-align:center;
      "
    >
      <p
        style="
          margin:0;
          color:#ffffff;
          font-size:12px;
        "
      >
        TES Apparels | Bengaluru, Karnataka, India
      </p>
    </div>

  </div>
</div>
        `,
      });

    /* =====================================================
       AUTO-REPLY FAILURE DOES NOT CANCEL ENQUIRY
    ===================================================== */

    if (autoReplyError) {
      console.error(
        "⚠️ Customer auto-reply failed:",
        autoReplyError
      );
    }

    /* =====================================================
       SUCCESS
    ===================================================== */

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully.",
      referenceId,
    });
  } catch (error) {
    console.error(
      "❌ Contact API Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}