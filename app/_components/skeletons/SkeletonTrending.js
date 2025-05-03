import SectionHeading from "../ui/SectionHeading";
import SkeletonTrendingCard from "./SkeletonTrendingCard";

function SkeletonTrending() {
  return (
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
  );
}

export default SkeletonTrending;
