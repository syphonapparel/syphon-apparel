
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Hr,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface AdminQuoteNotificationProps {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  productCategory: string;
  estimatedQuantity: string;
  fabricDetails: string;
  targetPrice: string;
  targetBudget: string;
  brandingRequirements: string;
  message: string;
}

export default function AdminQuoteNotification(
  props: AdminQuoteNotificationProps
) {
  return (
    <Html>
      <Head />
      <Preview>New Quote Request from {props.fullName}</Preview>
      <Body style={{ backgroundColor: "#f3f4f6", fontFamily: "sans-serif" }}>
        <Container style={{ maxWidth: "600px", margin: "0 auto" }}>
          {/* Header Section */}
          <Section
            style={{
              backgroundColor: "#111111",
              padding: "40px 20px",
              textAlign: "center",
              borderRadius: "12px 12px 0 0",
            }}
          >
            <Heading
              style={{
                color: "#ffffff",
                fontSize: "24px",
                margin: "0 0 8px 0",
                fontWeight: "bold",
              }}
            >
              SYPHON APPAREL
            </Heading>
            <Text
              style={{
                color: "#00C853",
                fontSize: "14px",
                margin: "0",
                fontWeight: "600",
                letterSpacing: "1px",
              }}
            >
              NEW QUOTE REQUEST
            </Text>
          </Section>

          {/* Customer Information Section */}
          <Section
            style={{
              backgroundColor: "#ffffff",
              padding: "30px 20px",
              borderRadius: "0",
            }}
          >
            <Heading
              style={{
                fontSize: "18px",
                color: "#111111",
                margin: "0 0 20px 0",
                fontWeight: "bold",
              }}
            >
              Customer Information
            </Heading>
            <div
              style={{
                marginBottom: "12px",
              }}
            >
              <Text
                style={{
                  fontSize: "14px",
                  color: "#666666",
                  margin: "0 0 4px 0",
                }}
              >
                Full Name
              </Text>
              <Text
                style={{
                  fontSize: "16px",
                  color: "#111111",
                  margin: "0",
                  fontWeight: "500",
                }}
              >
                {props.fullName}
              </Text>
            </div>
            <div
              style={{
                marginBottom: "12px",
              }}
            >
              <Text
                style={{
                  fontSize: "14px",
                  color: "#666666",
                  margin: "0 0 4px 0",
                }}
              >
                Company Name
              </Text>
              <Text
                style={{
                  fontSize: "16px",
                  color: "#111111",
                  margin: "0",
                  fontWeight: "500",
                }}
              >
                {props.companyName}
              </Text>
            </div>
            <div
              style={{
                marginBottom: "12px",
              }}
            >
              <Text
                style={{
                  fontSize: "14px",
                  color: "#666666",
                  margin: "0 0 4px 0",
                }}
              >
                Email
              </Text>
              <Text
                style={{
                  fontSize: "16px",
                  color: "#111111",
                  margin: "0",
                  fontWeight: "500",
                }}
              >
                {props.email}
              </Text>
            </div>
            <div>
              <Text
                style={{
                  fontSize: "14px",
                  color: "#666666",
                  margin: "0 0 4px 0",
                }}
              >
                Phone
              </Text>
              <Text
                style={{
                  fontSize: "16px",
                  color: "#111111",
                  margin: "0",
                  fontWeight: "500",
                }}
              >
                {props.phone}
              </Text>
            </div>
          </Section>

          {/* Project Information Section */}
          <Section
            style={{
              backgroundColor: "#ffffff",
              padding: "30px 20px",
              borderRadius: "0",
            }}
          >
            <Heading
              style={{
                fontSize: "18px",
                color: "#111111",
                margin: "0 0 20px 0",
                fontWeight: "bold",
              }}
            >
              Project Information
            </Heading>
            <div
              style={{
                backgroundColor: "#111111",
                padding: "24px",
                borderRadius: "8px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  marginBottom: "16px",
                }}
              >
                <Text
                  style={{
                    fontSize: "13px",
                    color: "#00C853",
                    margin: "0 0 6px 0",
                    fontWeight: "bold",
                    letterSpacing: "0.5px",
                  }}
                >
                  PRODUCT CATEGORY
                </Text>
                <Text
                  style={{
                    fontSize: "15px",
                    color: "#ffffff",
                    margin: "0",
                    fontWeight: "500",
                  }}
                >
                  {props.productCategory}
                </Text>
              </div>
              <div
                style={{
                  marginBottom: "16px",
                }}
              >
                <Text
                  style={{
                    fontSize: "13px",
                    color: "#00C853",
                    margin: "0 0 6px 0",
                    fontWeight: "bold",
                    letterSpacing: "0.5px",
                  }}
                >
                  ESTIMATED QUANTITY
                </Text>
                <Text
                  style={{
                    fontSize: "15px",
                    color: "#ffffff",
                    margin: "0",
                    fontWeight: "500",
                  }}
                >
                  {props.estimatedQuantity}
                </Text>
              </div>
              <div
                style={{
                  marginBottom: "16px",
                }}
              >
                <Text
                  style={{
                    fontSize: "13px",
                    color: "#00C853",
                    margin: "0 0 6px 0",
                    fontWeight: "bold",
                    letterSpacing: "0.5px",
                  }}
                >
                  FABRIC DETAILS
                </Text>
                <Text
                  style={{
                    fontSize: "15px",
                    color: "#ffffff",
                    margin: "0",
                    fontWeight: "500",
                  }}
                >
                  {props.fabricDetails}
                </Text>
              </div>
              <div
                style={{
                  marginBottom: "16px",
                }}
              >
                <Text
                  style={{
                    fontSize: "13px",
                    color: "#00C853",
                    margin: "0 0 6px 0",
                    fontWeight: "bold",
                    letterSpacing: "0.5px",
                  }}
                >
                  TARGET PRICE
                </Text>
                <Text
                  style={{
                    fontSize: "15px",
                    color: "#ffffff",
                    margin: "0",
                    fontWeight: "500",
                  }}
                >
                  {props.targetPrice}
                </Text>
              </div>
              <div
                style={{
                  marginBottom: "16px",
                }}
              >
                <Text
                  style={{
                    fontSize: "13px",
                    color: "#00C853",
                    margin: "0 0 6px 0",
                    fontWeight: "bold",
                    letterSpacing: "0.5px",
                  }}
                >
                  TARGET BUDGET
                </Text>
                <Text
                  style={{
                    fontSize: "15px",
                    color: "#ffffff",
                    margin: "0",
                    fontWeight: "500",
                  }}
                >
                  {props.targetBudget}
                </Text>
              </div>
              <div>
                <Text
                  style={{
                    fontSize: "13px",
                    color: "#00C853",
                    margin: "0 0 6px 0",
                    fontWeight: "bold",
                    letterSpacing: "0.5px",
                  }}
                >
                  PRINTING / BRANDING REQUIREMENTS
                </Text>
                <Text
                  style={{
                    fontSize: "15px",
                    color: "#ffffff",
                    margin: "0",
                    fontWeight: "500",
                  }}
                >
                  {props.brandingRequirements}
                </Text>
              </div>
            </div>
          </Section>

          {/* Additional Requirements Section */}
          <Section
            style={{
              backgroundColor: "#ffffff",
              padding: "30px 20px",
              borderRadius: "0",
            }}
          >
            <Heading
              style={{
                fontSize: "18px",
                color: "#111111",
                margin: "0 0 20px 0",
                fontWeight: "bold",
              }}
            >
              Additional Requirements
            </Heading>
            <div
              style={{
                backgroundColor: "#f9fafb",
                padding: "20px",
                borderRadius: "8px",
                borderLeft: "4px solid #00C853",
              }}
            >
              <Text
                style={{
                  fontSize: "15px",
                  color: "#111111",
                  margin: "0",
                  lineHeight: "1.6",
                  whiteSpace: "pre-wrap",
                }}
              >
                {props.message}
              </Text>
            </div>
          </Section>

          {/* Internal Team Notes Section */}
          <Section
            style={{
              backgroundColor: "#ffffff",
              padding: "30px 20px",
              borderRadius: "0",
            }}
          >
            <Heading
              style={{
                fontSize: "18px",
                color: "#111111",
                margin: "0 0 20px 0",
                fontWeight: "bold",
              }}
            >
              Internal Team Notes
            </Heading>
            <div>
              <div
                style={{
                  marginBottom: "12px",
                  display: "flex",
                }}
              >
                <Text
                  style={{
                    fontSize: "15px",
                    color: "#00C853",
                    margin: "0 12px 0 0",
                    fontWeight: "bold",
                  }}
                >
                  •
                </Text>
                <Text
                  style={{
                    fontSize: "15px",
                    color: "#111111",
                    margin: "0",
                  }}
                >
                  Review project feasibility and manufacturing requirements.
                </Text>
              </div>
              <div
                style={{
                  marginBottom: "12px",
                  display: "flex",
                }}
              >
                <Text
                  style={{
                    fontSize: "15px",
                    color: "#00C853",
                    margin: "0 12px 0 0",
                    fontWeight: "bold",
                  }}
                >
                  •
                </Text>
                <Text
                  style={{
                    fontSize: "15px",
                    color: "#111111",
                    margin: "0",
                  }}
                >
                  Verify requested sample or production quantity.
                </Text>
              </div>
              <div
                style={{
                  marginBottom: "12px",
                  display: "flex",
                }}
              >
                <Text
                  style={{
                    fontSize: "15px",
                    color: "#00C853",
                    margin: "0 12px 0 0",
                    fontWeight: "bold",
                  }}
                >
                  •
                </Text>
                <Text
                  style={{
                    fontSize: "15px",
                    color: "#111111",
                    margin: "0",
                  }}
                >
                  Prepare pricing based on fabrics, printing, branding and
                  packaging.
                </Text>
              </div>
              <div
                style={{
                  display: "flex",
                }}
              >
                <Text
                  style={{
                    fontSize: "15px",
                    color: "#00C853",
                    margin: "0 12px 0 0",
                    fontWeight: "bold",
                  }}
                >
                  •
                </Text>
                <Text
                  style={{
                    fontSize: "15px",
                    color: "#111111",
                    margin: "0",
                  }}
                >
                  Contact customer within 24 hours.
                </Text>
              </div>
            </div>
          </Section>

          {/* Footer Section */}
          <Section
            style={{
              backgroundColor: "#ffffff",
              padding: "30px 20px",
              borderRadius: "0 0 12px 12px",
              textAlign: "center",
            }}
          >
            <Hr
              style={{
                borderColor: "#e5e7eb",
                marginBottom: "20px",
              }}
            />
            <Text
              style={{
                fontSize: "13px",
                color: "#666666",
                margin: "0",
                lineHeight: "1.6",
              }}
            >
              This notification was automatically generated from the Syphon
              Apparel website.
            </Text>
            <Text
              style={{
                fontSize: "13px",
                color: "#666666",
                margin: "8px 0 0 0",
                lineHeight: "1.6",
              }}
            >
              Please reply directly to the customer's email to continue the
              conversation.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}