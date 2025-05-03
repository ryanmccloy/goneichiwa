import Hero from "@/app/_components/landing/Hero";
import Advantages from "@/app/_components/landing/about-us/Advantages";
import Bestsellers from "@/app/_components/landing/bestsellers/Bestsellers";
import MoreHelp from "@/app/_components/landing/more-help/MoreHelp";
import ReviewsBanner from "@/app/_components/landing/reviews-banner/ReviewsBanner";
import FinalCTA from "@/app/_components/landing/final-cta/FinalCTA";
import NewsLetter from "@/app/_components/newsletter/NewsLetter";
import { getFeaturedTravelGuides } from "./_lib/data-service";
import { formatGuidesWithImageUrl } from "./_lib/helpers/formatGuidesWithImageUrl";
import { formatGuidesByIsActive } from "./_lib/helpers/filterFunctions/formatGuidesByIsActive";

export default async function Page() {
  const featuredGuides = await getFeaturedTravelGuides();
  const guidesWithImages = await formatGuidesWithImageUrl(featuredGuides);
  const sortedGuides = formatGuidesByIsActive(guidesWithImages);

  // Add the static last card
  sortedGuides.push({
    id: "view-all-guides",
    title: "View All Guides",
    coverImageUrl: "/images/bestsellers/view-all.webp",
    coverImageAlt: "Japanese Souvenir Collage",
  });

  return (
    <>
      <Hero />
      <Advantages />
      <Bestsellers guides={sortedGuides} />
      <ReviewsBanner />
      <MoreHelp />
      <FinalCTA />
      <NewsLetter />
    </>
  );
}
