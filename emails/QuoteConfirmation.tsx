import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
  Img,
} from "@react-email/components";

interface QuoteConfirmationProps {
  fullName: string;
}

export default function QuoteConfirmation({
  fullName,
}: QuoteConfirmationProps) {
  return (
    <Html>
      <Head />

      <Preview>
        Thank you for contacting Syphon Apparel
      </Preview>

      <Body
        style={{
          backgroundColor: "#f3f4f6",
          fontFamily:
            "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif",
          padding: "40px 20px",
        }}
      >
        <Container
          style={{
            maxWidth: "650px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            borderRadius: "18px",
            overflow: "hidden",
            boxShadow: "0 10px 35px rgba(0,0,0,0.08)",
          }}
        >
          {/* HEADER */}

          <Section
            style={{
              backgroundColor: "#111111",
              textAlign: "center",
              padding: "50px 30px",
            }}
          >
            <Img
              src="https://www.syphonapparel.com/logo.png"
              width="90"
              alt="Syphon Apparel"
              style={{
                margin: "0 auto 20px",
              }}
            />

            <Heading
              style={{
                color: "#ffffff",
                fontSize: "34px",
                margin: "0",
                letterSpacing: "2px",
              }}
            >
              SYPHON APPAREL
            </Heading>

            <Text
              style={{
                color: "#00C853",
                marginTop: "12px",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              Custom Apparel Manufacturing • Private Label • Worldwide Shipping
            </Text>
          </Section>

          {/* CONTENT */}

          <Section
            style={{
              padding: "45px",
            }}
          >
            <Heading
              style={{
                color: "#111111",
                fontSize: "32px",
                marginTop: "0",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              Thank You for Contacting
              <br />
              Syphon Apparel
            </Heading>

            <Text
              style={{
                fontSize: "17px",
                color: "#444",
                lineHeight: "30px",
              }}
            >
              Hello <strong>{fullName}</strong>,
            </Text>

            <Text
              style={{
                fontSize: "17px",
                color: "#555",
                lineHeight: "30px",
              }}
            >
              Thank you for requesting a quotation from
              <strong> Syphon Apparel.</strong>

              <br />
              <br />

              We have successfully received your manufacturing inquiry and our
              production specialists are already reviewing your project.

              <br />
              <br />

              We normally respond within
              <strong> 24 hours.</strong>
            </Text>

            <Section
              style={{
                marginTop: "40px",
                marginBottom: "40px",
                borderRadius: "14px",
                backgroundColor: "#111111",
                padding: "28px",
                textAlign: "center",
              }}
            >
              <Text
                style={{
                  color: "#ffffff",
                  margin: "0",
                  fontSize: "14px",
                  letterSpacing: "1px",
                }}
              >
                RESPONSE TIME
              </Text>

              <Heading
                style={{
                  color: "#00C853",
                  margin: "10px 0 0",
                  fontSize: "34px",
                }}
              >
                24 HOURS
              </Heading>
            </Section>

            <Hr
              style={{
                borderColor: "#e5e7eb",
              }}
            />
            {/* REQUEST SUMMARY */}

<Heading
  style={{
    fontSize: "24px",
    color: "#111111",
    marginTop: "40px",
  }}
>
  Your Journey With Us
</Heading>

<Text
  style={{
    color: "#555",
    fontSize: "16px",
    lineHeight: "30px",
  }}
>
  Every project at <strong>Syphon Apparel</strong> follows a professional
  manufacturing process designed to ensure quality, transparency and timely
  delivery.
</Text>

<Section
  style={{
    backgroundColor: "#f9fafb",
    border: "1px solid #e5e7eb",
    borderRadius: "14px",
    padding: "30px",
    marginTop: "25px",
  }}
>

<Text style={{fontSize:"18px",fontWeight:"700",color:"#111111"}}>
Inquiry Received
</Text>

<Text style={{color:"#666",marginBottom:"22px"}}>
✓ Your request has successfully reached our production team.
</Text>

<Text style={{fontSize:"18px",fontWeight:"700",color:"#111111"}}>
Requirements Review
</Text>

<Text style={{color:"#666",marginBottom:"22px"}}>
✓ Our specialists carefully evaluate your designs, fabrics, printing,
embroidery and production requirements.
</Text>

<Text style={{fontSize:"18px",fontWeight:"700",color:"#111111"}}>
Consultation
</Text>

<Text style={{color:"#666",marginBottom:"22px"}}>
✓ If required, we'll contact you to discuss sizing, materials, branding,
sampling or manufacturing recommendations.
</Text>

<Text style={{fontSize:"18px",fontWeight:"700",color:"#111111"}}>
Price Quotation
</Text>

<Text style={{color:"#666",marginBottom:"22px"}}>
✓ You'll receive a detailed quotation including
<strong> price per piece</strong>, production costs, available customization,
shipping options and estimated lead time.
</Text>

<Text style={{fontSize:"18px",fontWeight:"700",color:"#111111"}}>
Production
</Text>

<Text style={{color:"#666"}}>
✓ Once approved, your order moves directly into manufacturing under strict
quality control.
</Text>

</Section>

<Section
  style={{
    marginTop: "35px",
    backgroundColor: "#e9fff1",
    borderRadius: "14px",
    padding: "28px",
    border: "1px solid #b6f0ca",
  }}
>

<Heading
style={{
fontSize:"24px",
marginTop:"0",
color:"#111111"
}}
>
Pricing & Manufacturing
</Heading>

<Text
style={{
fontSize:"16px",
lineHeight:"30px",
color:"#444"
}}
>
Our quotations are based on several important manufacturing factors,
including product complexity, fabric selection, printing or embroidery
requirements, quantity and packaging.
</Text>

<Text
style={{
fontSize:"16px",
lineHeight:"30px",
color:"#444"
}}
>
Larger production quantities usually benefit from
<strong> economies of scale</strong>, meaning the
<strong> price per piece decreases</strong> as order volume increases.
Our team always works to provide the most competitive manufacturing solution
for your project without compromising quality.
</Text>

</Section>
            <Hr
              style={{
                borderColor: "#e5e7eb",
                margin: "45px 0",
              }}
            />

            <Text
              style={{
                fontSize: "15px",
                color: "#666666",
                lineHeight: "28px",
                textAlign: "center",
              }}
            >
              If you have any additional requirements, reference designs,
              technical packs, or questions, simply reply to this email.
              <br />
              Our team is always happy to assist you.
            </Text>
          </Section>

          {/* FOOTER */}

          <Section
            style={{
              backgroundColor: "#111111",
              textAlign: "center",
              padding: "35px",
            }}
          >
            <Heading
              style={{
                color: "#00C853",
                fontSize: "24px",
                margin: "0 0 12px",
              }}
            >
              Syphon Apparel
            </Heading>

            <Text
              style={{
                color: "#d1d5db",
                fontSize: "14px",
                lineHeight: "24px",
                margin: "0",
              }}
            >
              Premium Custom Apparel Manufacturing
              <br />
              Private Label • OEM • ODM
              <br />
              Sialkot, Pakistan
            </Text>

            <Text
              style={{
                color: "#9ca3af",
                fontSize: "13px",
                marginTop: "28px",
              }}
            >
              © {new Date().getFullYear()} Syphon Apparel.
              <br />
              All Rights Reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}