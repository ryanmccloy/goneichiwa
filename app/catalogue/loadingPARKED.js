import SectionHeading from "@/app/_components/ui/SectionHeading";
import SkeletonTrendingCard from "@/app/_components/skeletons/SkeletonTrendingCard";
import SkeletonTravelGuideCard from "@/app/_components/skeletons/SkeletonTravelGuideCard";
import SkeletonNewsletter from "../_components/skeletons/SkeletonNewsletter";

export default function Loading() {
  return;
  <div className="top-page-spacing">
    <section className="width-size">
      {/* MOBILE FEATURES GUIDES */}
      <div className="block lg:hidden">
        <SectionHeading>Featured Guides</SectionHeading>

        <div className="flex gap-15 pb-30 overflow-x-auto">
          <SkeletonTrendingCard />
          <SkeletonTrendingCard />
          <SkeletonTrendingCard />
          <SkeletonTrendingCard />
          <SkeletonTrendingCard />
        </div>
      </div>

      {/* DESKTOP FEATURES GUIDES */}
      <div className="hidden lg:grid grid-cols-[60%_40%] gap-15 h-[550px]">
        <div className="grid grid-rows-[auto_1fr] h-full">
          <div className=" -mb-30 lg:-mb-60">
            <SectionHeading>Featured Guides</SectionHeading>
          </div>
          <SkeletonTrendingCard desktop={true} />
        </div>

        <div className="grid grid-rows-2 gap-15 h-full">
          <SkeletonTrendingCard desktop={true} />
          <SkeletonTrendingCard desktop={true} />
        </div>
      </div>
    </section>

    {/* FULL CATALOGUE SECTINOS */}

    <section className="width-size section-styles">
      <SectionHeading>All Travel guides</SectionHeading>
      <div className="grid gap-x-30 gap-y-60 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <SkeletonTravelGuideCard />
        <SkeletonTravelGuideCard />
        <SkeletonTravelGuideCard />
        <SkeletonTravelGuideCard />
        <SkeletonTravelGuideCard />
        <SkeletonTravelGuideCard />
        <SkeletonTravelGuideCard />
        <SkeletonTravelGuideCard />
      </div>
    </section>

    {/* NEWSLETTER SECTION */}
    <SkeletonNewsletter />
  </div>;
}
