import GuideSuggestions from "@/app/_components/product-page/GuideSuggestions";
import ProductOverview from "@/app/_components/product-page/ProductOverview";
import formatTitleRoute from "@/app/_lib/utils/helpers/formatTitleRoute";

export async function generateMetadata({ params }) {
  const name = await formatTitleRoute(params.destination);
  return {
    title: `${name}`,
  };
}

export default async function Page({ params }) {
  const destination = await formatTitleRoute(params.destination);

  return (
    <>
      <ProductOverview destination={destination} />
      <GuideSuggestions />
    </>
  );
}
