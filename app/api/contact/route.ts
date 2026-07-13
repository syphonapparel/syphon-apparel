import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
      fullName,
      companyName,
      email,
      phone,
      productCategory,
      estimatedQuantity,
      message,
    } = await req.json();

    // Email to Syphon Apparel
    const adminEmail = await resend.emails.send({
      from: "Syphon Apparel <suppor@syphonapparel.com>",
      to: ["suppor@syphonapparel.com"],
      subject: `New Quote Request from ${fullName}`,
      replyTo: email,
      html: `
        <h2>New Quote Request</h2>

        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Product Category:</strong> ${productCategory}</p>
        <p><strong>Estimated Quantity:</strong> ${estimatedQuantity}</p>

        <hr>

        <p><strong>Project Details:</strong></p>
        <p>${message}</p>
      `,
    });

    if (adminEmail.error) {
      return NextResponse.json(
        { error: adminEmail.error },
        { status: 500 }
      );
    }

    // Auto-response to customer
    await resend.emails.send({
      from: "Syphon Apparel <suppor@syphonapparel.com>",
      to: [email],
      subject: "We've received your quote request",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:650px;margin:auto;padding:40px;line-height:1.7;color:#333;">

          <h1 style="color:#00C853;">
            Thank you for contacting Syphon Apparel!
          </h1>

          <p>Hello <strong>${fullName}</strong>,</p>

          <p>
            We have successfully received your quote request.
            Our team is reviewing your requirements and will contact you within
            <strong>24 hours</strong>.
          </p>

          <hr style="margin:30px 0;">

          <h3>Your Request Summary</h3>

          <p><strong>Company:</strong> ${companyName}</p>
          <p><strong>Product Category:</strong> ${productCategory}</p>
          <p><strong>Estimated Quantity:</strong> ${estimatedQuantity}</p>

          <hr style="margin:30px 0;">

          <p>
            If you have additional information or artwork to share,
            simply reply to this email.
          </p>

          <p>
            Best regards,<br/>
            <strong>Syphon Apparel</strong><br/>
            suppor@syphonapparel.com
          </p>

        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}