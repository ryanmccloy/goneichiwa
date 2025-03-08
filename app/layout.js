import "@/app/_styles/globals.css";
import Navigation from "@/app/_components/Navigation";

import { Anton, Montserrat } from "next/font/google";

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
    default: "Here & There",
  },
  description:
    "Discover expertly crafted travel guides for stress-free adventures. Explore top destinations with handpicked recommendations, local tips, and detailed trip plans. Instantly download your perfect itinerary today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${anton.variable} ${montserrat.variable}`}>
      <body className="body-styles">
        <header>
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright WebDevRyan</footer>
      </body>
    </html>
  );
}
