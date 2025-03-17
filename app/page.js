import Hero from "./_components/landing/Hero";
import AboutUs from "./_components/about-us/AboutUs";
import MoreHelp from "./_components/landing/more-help/MoreHelp";
import Bestsellers from "./_components/landing/bestsellers/Bestsellers";
import ReviewsBanner from "./_components/landing/reviews-banner/ReviewsBanner";
import FinalCTA from "./_components/landing/final-cta/FinalCTA";
import NewsLetter from "./_components/newsletter/Newsletter";

export default function Page() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Bestsellers />
      <ReviewsBanner />
      <MoreHelp />
      <FinalCTA />
      <NewsLetter />
    </>
  );
}
