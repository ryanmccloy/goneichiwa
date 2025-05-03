import SectionHeading from "../ui/SectionHeading";
import SkeletonTravelGuideCard from "./SkeletonTravelGuideCard";

function SkeletonCatalogue() {
  return (
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
  );
}

export default SkeletonCatalogue;
