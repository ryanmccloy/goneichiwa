import { Anton, Montserrat } from "next/font/google";
import { Toaster } from "react-hot-toast";

import "@/app/_styles/globals.css";
import Navigation from "@/app/_components/navigation/Navigation";
import Footer from "./_components/footer/Footer";
import Providers from "./_components/providers/Providers";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-anton",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata = {
  title: {
    template: "%s - Here & There",
    default: "Here & There | Travel Guides for Smart Explorers",
  },
  description:
    "Discover expertly crafted travel guides for stress-free adventures. Explore top destinations with handpicked recommendations, local tips, and detailed trip plans. Instantly download your guide today!",

  keywords: [
    "travel guides",
    "trip planning",
    "city guides",
    "hiking guides",
    "nature trips",
    "custom travel plans",
    "travel consultations",
    "best things to do in Europe",
    "best things to do in America",
    "best things to do in Canada",
    "best things to do in Japan",
    "travel blog",
  ],

  icons: {
    // icon: "/icon.png",
  },

  themeColor: "#80b5d9",

  openGraph: {
    title: "Here & There | Travel Guides for Smart Explorers",
    description:
      "Instantly download beautifully curated travel itineraries and guides. Navigate the world smarter.",
    // url: "https://yourdomain.com",
    // siteName: "Here & There",
    // images: [
    //   {
    //     url: "https://yourdomain.com/images/social-cover.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Here & There travel guides",
    //   },
    // ],
    // type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${anton.variable} ${montserrat.variable}`}>
      <body className="body-styles">
        <Providers>
          <Toaster />
          <Navigation />
          <main className="flex-grow">{children}</main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
