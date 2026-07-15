import { Resend } from "resend";
import { NextResponse } from "next/server";
import { render } from "@react-email/render";
import QuoteConfirmation from "@/emails/QuoteConfirmation";
import AdminQuoteNotification from "@/emails/AdminQuoteNotification";
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
      fabricDetails,
      targetPrice,
      targetBudget,
      brandingRequirements,
      message,
    } = await req.json();

    // Email to Syphon Apparel
    const adminEmail = await resend.emails.send({
      from: "Syphon Apparel <suppor@syphonapparel.com>",
      to: ["suppor@syphonapparel.com"],
      subject: `New Quote Request from ${fullName}`,
      replyTo: email,
     
      html: await render(
           AdminQuoteNotification({
           fullName,
           companyName,
           email,
           phone,
           productCategory,
           estimatedQuantity,
           fabricDetails,
           targetPrice,
           targetBudget,
           brandingRequirements,
           message,
     })
    ),
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
      html: await render(
        QuoteConfirmation({
          fullName,
        })
      ),
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