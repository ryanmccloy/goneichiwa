import { getTravelGuides } from "@/app/_lib/data-service";
import TravelGuideCard from "./TravelGuideCard";
import { formatGuidesWithImageUrl } from "@/app/_lib/helpers/formatGuidesWithImageUrl";
import { formatGuidesByIsActive } from "@/app/_lib/helpers/filterFunctions/formatGuidesByIsActive";

export default async function TravelGuides() {
  const travelGuides = await getTravelGuides();

  const guidesWithImageUrls = await formatGuidesWithImageUrl(travelGuides);

  const sortedGuides = formatGuidesByIsActive(guidesWithImageUrls);

  return (
    <div className="grid gap-x-30 gap-y-60 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {sortedGuides.map((guide) => {
        return (
          <TravelGuideCard
            key={guide.id}
            id={guide.id}
            title={guide.title}
            price={guide.price}
            url={guide.coverImageUrl}
            alt={guide.coverImageAlt}
            isActive={guide.isActive}
          />
        );
      })}
    </div>
  );
}
