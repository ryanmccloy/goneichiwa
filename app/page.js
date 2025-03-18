import Hero from "./_components/landing/Hero";
import Advantages from "./_components/landing/about-us/Advantages";
import Bestsellers from "./_components/landing/bestsellers/Bestsellers";
import MoreHelp from "./_components/landing/more-help/MoreHelp";
import ReviewsBanner from "./_components/landing/reviews-banner/ReviewsBanner";
import FinalCTA from "./_components/landing/final-cta/FinalCTA";
import NewsLetter from "./_components/newsletter/Newsletter";

export default function Page() {
  return (
    <>
      <Hero />
      <Advantages />
      {/* <AboutUs /> */}
      <Bestsellers />
      <ReviewsBanner />
      <MoreHelp />
      <FinalCTA />
      <NewsLetter />
    </>
  );
}
