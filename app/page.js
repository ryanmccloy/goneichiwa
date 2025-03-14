import Hero from "./_components/landing/Hero";
import AboutUs from "./_components/landing/about-us/AboutUs";
import MoreHelp from "./_components/landing/more-help/MoreHelp";
import Bestsellers from "./_components/landing/bestsellers/Bestsellers";
import ReviewsBanner from "./_components/landing/reviews-banner/ReviewsBanner";

export default function Page() {
  return (
    <>
      <Hero />
      <AboutUs />
      <MoreHelp />
      <Bestsellers />
      <ReviewsBanner />
    </>
  );
}
