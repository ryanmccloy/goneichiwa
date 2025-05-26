import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Img,
  Text,
  Button,
} from "@react-email/components";
import * as React from "react";

export default function OrderConfirmationEmail({
  customerName,
  orderNumber,
  items,
  downloadUrl,
}) {
  return (
    <Html>
      <Head />
      <Preview>Thanks for your order from Goneichiwa!</Preview>
      <Body style={styles.main}>
        <Container style={styles.container}>
          <Img
            src="https://yourdomain.com/logo.png"
            width="120"
            alt="Goneichiwa Logo"
            style={styles.logo}
          />

          <Text style={styles.heading}>
            Thanks for your order, {customerName}!
          </Text>

          <Text style={styles.paragraph}>
            We’re processing your order{" "}
            <span style={styles.label}>{orderNumber}</span>. You can download
            your guide(s) below:
          </Text>

          <div style={styles.orderInfo}>
            <Text style={styles.label}>Guides:</Text>
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  <Text style={styles.paragraph}>{item.title}</Text>
                </li>
              ))}
            </ul>
          </div>

          <Button href={downloadUrl} style={styles.button}>
            Download Guide
          </Button>

          <Text style={styles.footer}>
            If you didn’t make this purchase, please ignore this email.
            <br />© {new Date().getFullYear()} Goneichiwa.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const styles = {
  main: {
    backgroundColor: "#f4f4f4",
    padding: "40px 0",
  },
  container: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "600px",
    margin: "0 auto",
  },
  logo: {
    margin: "0 auto 20px",
  },
  heading: {
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
  },
  paragraph: {
    fontSize: "14px",
    lineHeight: "22px",
  },
  orderInfo: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  label: {
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: "5px",
    textDecoration: "none",
    display: "inline-block",
    marginTop: "20px",
  },
  footer: {
    fontSize: "12px",
    color: "#888",
    marginTop: "30px",
    textAlign: "center",
  },
};
