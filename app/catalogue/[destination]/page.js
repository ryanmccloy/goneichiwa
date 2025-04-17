import GuideSuggestions from "@/app/_components/product-page/GuideSuggestions";
import ProductOverview from "@/app/_components/product-page/ProductOverview";
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

  return (
    <>
      <ProductOverview destination={guideId} />
      <GuideSuggestions />
    </>
  );
}
