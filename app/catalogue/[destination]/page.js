import GuideSuggestions from "@/app/_components/product-page/GuideSuggestions";
import ProductOverview from "@/app/_components/product-page/ProductOverview";
import { getSpecificTravelGuide } from "@/app/_lib/data-service";
import formatTitleRoute from "@/app/_lib/helpers/formatTitleRoute";

export async function generateMetadata({ params }) {
  const guide = await params.destination;
  const name = formatTitleRoute(guide);
  return {
    title: `${name}`,
  };
}

export default async function Page({ params }) {
  const guideId = await params.destination;
  const guide = await getSpecificTravelGuide(guideId);
  const { country, continent, id } = guide;

  return (
    <>
      <ProductOverview guide={guide} />
      <GuideSuggestions
        country={country}
        continent={continent}
        currentGuide={id}
      />
    </>
  );
}
