import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Img,
  Text,
} from "@react-email/components";

export default function OrderConfirmationEmail({
  customerName = "null",
  orderNumber = "null",
  orderTotal = "null",
  orderDate = "null",
  items = "null",
}) {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Preview>Adventure awaits!</Preview>
      <Body style={styles.main}>
        <Container style={styles.container}>
          <Img
            src="https://goneichiwa-c3rt4zbyu-webdevryans-projects.vercel.app/logo/logo.png"
            width="120"
            alt="Goneichiwa Logo"
            style={styles.logo}
          />
          <Text style={styles.heading}>
            {`Your Next Adventure Awaits${customerName ? `, ${customerName}!` : "!"}`}
          </Text>
          <Text style={styles.paragraph}>
            Thank you for your order with <strong>Goneichiwa</strong> ✈️ We're
            thrilled to help guide your next adventure.
          </Text>
          <Text style={styles.subheading}>Order Details</Text>
          <Text style={styles.meta}>
            Order Number:{" "}
            {orderNumber ||
              "Error: Please contact support at contact@goneichiwa.com"}
            <br />
            Order Date:{" "}
            {orderDate ||
              "Error: Please contact support at contact@goneichiwa.com"}
            <br />
            Total:{" "}
            {orderTotal ||
              "Error: Please contact support at contact@goneichiwa.com"}
          </Text>

          <Text style={styles.label}>Your Guides:</Text>
          <ul style={styles.list}>
            {items.map((item, index) => (
              <li key={index} style={styles.listItemBox}>
                <table style={styles.table}>
                  <tr style={styles.tableRow}>
                    <td style={styles.tableCellLeft}>{item.title}</td>
                    <td style={styles.tableCellRight}>
                      <a href={item.downloadUrl} style={styles.button}>
                        <Img
                          src="https://img.icons8.com/?size=100&id=14100&format=png&color=fdfdfd"
                          alt="Download"
                          width="20"
                          height="20"
                          style={{ display: "block" }}
                        />
                      </a>
                    </td>
                  </tr>
                </table>
              </li>
            ))}
          </ul>

          <Text style={styles.paragraph}>
            Wishing you safe, happy, and unforgettable travels. Whether you're
            wandering ancient cities, hiking scenic trails, or discovering
            hidden local gems — soak it all in and enjoy every moment ✨
          </Text>

          <Text style={styles.subheading}>Explore More With Goneichiwa</Text>

          <table cellPadding="0" cellSpacing="0" style={styles.ctaList}>
            <tbody>
              <tr>
                <td style={styles.ctaImageCell}>
                  <Img
                    src="https://goneichiwa-ji0zbr7tr-webdevryans-projects.vercel.app/emails/order-confirmation/consultations.png"
                    width="100"
                    alt="Private Travel Consultation"
                    style={styles.ctaImage}
                  />
                </td>
                <td style={styles.ctaContentCell}>
                  <Text style={styles.ctaTitle}>Plan With an Expert</Text>
                  <a
                    href="https://goneichiwa-c3rt4zbyu-webdevryans-projects.vercel.app/consultations"
                    style={styles.ctaLink}
                  >
                    Book a consultation →
                  </a>
                </td>
              </tr>

              <tr>
                <td style={styles.ctaImageCell}>
                  <Img
                    src="https://goneichiwa-ji0zbr7tr-webdevryans-projects.vercel.app/emails/order-confirmation/catalogue.png"
                    width="100"
                    alt="Travel Guides"
                    style={styles.ctaImage}
                  />
                </td>
                <td style={styles.ctaContentCell}>
                  <Text style={styles.ctaTitle}>Explore More Guides</Text>
                  <a
                    href="https://goneichiwa-c3rt4zbyu-webdevryans-projects.vercel.app/catalogue"
                    style={styles.ctaLink}
                  >
                    View collection →
                  </a>
                </td>
              </tr>

              <tr>
                <td style={styles.ctaImageCell}>
                  <Img
                    src="https://goneichiwa-ji0zbr7tr-webdevryans-projects.vercel.app/emails/order-confirmation/blog.png"
                    width="100"
                    alt="Blog"
                    style={styles.ctaImage}
                  />
                </td>
                <td style={styles.ctaContentCell}>
                  <Text style={styles.ctaTitle}>Get Travel Tips</Text>
                  <a
                    href="https://goneichiwa-c3rt4zbyu-webdevryans-projects.vercel.app/blog"
                    style={styles.ctaLink}
                  >
                    Read the blog →
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <Text style={{ ...styles.footer, ...styles.footerSpace }}>
            If you didn’t make this purchase, please ignore this email.
            <br />
          </Text>
          <Text style={styles.footer}>
            <strong>Note:</strong> These PDF guides are for personal use only
            and may not be redistributed.
            <br />
          </Text>

          <Text style={styles.footer}>
            <br />© {new Date().getFullYear()} Goneichiwa.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const styles = {
  main: {
    backgroundColor: "#f8fafc",
    fontFamily: "'Montserrat', sans-serif",
    padding: "15px",
    fontSize: "14px",
    color: "#333",
  },
  container: {
    backgroundColor: "#fdfdfd",
    borderRadius: "12px",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "40px 30px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  },
  logo: {
    display: "block",
    margin: "0 auto 60px",
  },
  heading: {
    fontSize: "18px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "30px",
  },
  subheading: {
    fontSize: "16px",
    fontWeight: "600",
    marginTop: "30px",
  },
  meta: {
    marginBottom: "30px",
  },
  paragraph: {
    marginBottom: "60px",
  },
  label: {
    fontSize: "16px",
    fontWeight: "700",
    marginBottom: "15px",
    color: "#80b5d9",
  },
  list: {
    margin: "0",
    padding: "0",
    listStyle: "none",
    width: "100%",
    marginBottom: "30px",
  },
  listItemBox: {
    marginLeft: "0",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    border: "1px solid #eee",
    borderRadius: "8px",
    padding: "5px 15px",
    gap: "15px",
    marginBottom: "15px",
  },
  table: {
    width: "100%",
  },
  tableCellLeft: {
    verticalAlign: "middle",
  },
  tableCellRight: {
    textAlign: "right",
    verticalAlign: "middle",
    height: "100%",
  },
  button: {
    backgroundColor: "#80b5d9",
    color: "#fdfdfd",
    borderRadius: "6px",
    textDecoration: "none",
    textAlign: "center",
    padding: "10px 15px",
    display: "inline-block",
  },
  footer: {
    fontSize: "12px",
    color: "#888",
    marginBottom: "15px",
    textAlign: "center",
  },
  footerSpace: {
    marginTop: "60px",
  },
  ctaList: {
    listStyle: "none",
    padding: "0",
    marginBottom: "60px",
    marginTop: "30px",
    width: "100%",
  },
  ctaImageCell: {
    width: "100px",
    verticalAlign: "top",
    paddingBottom: "20px",
  },
  ctaContentCell: {
    paddingLeft: "15px",
    paddingBottom: "20px",
    verticalAlign: "bottom",
  },
  ctaImage: {
    display: "block",
    borderRadius: "8px",
    width: "100px",
    height: "75px",
    objectFit: "cover",
  },
  ctaTitle: {
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "5px",
  },
  ctaLink: {
    fontSize: "13px",
    color: "#80b5d9",
    textDecoration: "underline",
  },
};
