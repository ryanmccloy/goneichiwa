import Hero from "@/app/_components/landing/Hero";
import Advantages from "@/app/_components/landing/about-us/Advantages";
import Bestsellers from "@/app/_components/landing/bestsellers/Bestsellers";
import MoreHelp from "@/app/_components/landing/more-help/MoreHelp";
import ReviewsBanner from "@/app/_components/landing/reviews-banner/ReviewsBanner";
import FinalCTA from "@/app/_components/landing/final-cta/FinalCTA";
import NewsLetter from "@/app/_components/newsletter/NewsLetter";

export default function Page() {
  return (
    <>
      <Hero />
      <Advantages />
      <Bestsellers />
      <ReviewsBanner />
      <MoreHelp />
      <FinalCTA />
      <NewsLetter />
    </>
  );
}
