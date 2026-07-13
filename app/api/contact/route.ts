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

    const { error } = await resend.emails.send({
      from: "Syphon Apparel <quotes@syphonapparel.com>",
      to: ["support@syphonapparel.com"],
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

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}