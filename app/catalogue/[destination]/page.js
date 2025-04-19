import GuideCannotBeFound from "@/app/_components/product-page/GuideCannotBeFound";
import GuideSuggestions from "@/app/_components/product-page/GuideSuggestions";
import ProductOverview from "@/app/_components/product-page/ProductOverview";
import { getSpecificTravelGuide } from "@/app/_lib/data-service";
import formatTitleRoute from "@/app/_lib/helpers/formatTitleRoute";

export async function generateMetadata({ params }) {
  const { destination } = await params;
  const name = formatTitleRoute(destination);
  return {
    title: `${name}`,
  };
}

export default async function Page({ params }) {
  const { destination: guideId } = await params;

  const guide = await getSpecificTravelGuide(guideId);

  if (!guide) {
    return <GuideCannotBeFound />;
  }

  

  return (
    <>
      <ProductOverview guide={guide} />
      <GuideSuggestions
       guide={guide}
      />
    </>
  );
}
