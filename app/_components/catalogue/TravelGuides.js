import { getTravelGuides } from "@/app/_lib/data-service";
import TravelGuideCard from "./TravelGuideCard";
import { formatGuidesWithImageUrl } from "@/app/_lib/helpers/formatGuidesWithImageUrl";

// const testGuides = [
//   {
//     destination: "Tokyo",
//     price: "£5",
//     url: "/images/guides/tokyo.webp",
//     alt: "Tokyo Scenery",
//   },
//   {
//     destination: "Kyoto",
//     price: "£5",
//     url: "/images/guides/kyoto.webp",
//     alt: "Kyoto Pagoda",
//   },
//   {
//     destination: "Osaka",
//     price: "£5",
//     url: "/images/guides/osaka.webp",
//     alt: "Osaka Street",
//   },
//   {
//     destination: "Mt. Fuji",
//     price: "£5",
//     url: "/images/guides/fuji.webp",
//     alt: "Mt Fuji View",
//   },
//   {
//     destination: "Dolomites",
//     price: "£10",
//     url: "/images/guides/dolomites.webp",
//     alt: "Dolomites Mountains",
//   },
//   {
//     destination: "Rome",
//     price: "£5",
//     url: "/images/guides/rome.webp",
//     alt: "Roman Colosseum",
//   },
//   {
//     destination: "Florence",
//     price: "£5",
//     url: "/images/guides/florence.webp",
//     alt: "Florence City View",
//   },
//   {
//     destination: "Venice",
//     price: "£5",
//     url: "/images/guides/venice.webp",
//     alt: "Venice Canal",
//   },
// ];

export default async function TravelGuides() {
  const travelGuides = await getTravelGuides();

  const guidesWithImageUrls = await formatGuidesWithImageUrl(travelGuides);

  return (
    <div className="grid gap-x-30 gap-y-60 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {guidesWithImageUrls.map((guide) => {
        return (
          <TravelGuideCard
            key={guide.title}
            destination={guide.title}
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
