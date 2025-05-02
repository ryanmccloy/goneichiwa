import GuideCannotBeFound from "@/app/_components/product-page/GuideCannotBeFound";
import GuideSuggestions from "@/app/_components/product-page/GuideSuggestions";
import ProductOverview from "@/app/_components/product-page/ProductOverview";
import { getImageUrl, getSpecificTravelGuide } from "@/app/_lib/data-service";

export async function generateMetadata({ params }) {
  const guide = await getSpecificTravelGuide(params.destination);

  if (!guide) {
    return {
      title: "Guide Not Found",
      description:
        "Sorry, we couldn't find the travel guide you were looking for.",
    };
  }

  const imageUrl = await getImageUrl(guide.coverImage.path);
  const title = `${guide.title} Travel Guide`;
  const metaDescription =
    guide.metaDescription ||
    `Explore ${guide.title} with our curated travel guide including top attractions, local tips, and day trips.`;

  return {
    title,
    description: metaDescription,
    openGraph: {
      title,
      description: metaDescription,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${guide.title} travel guide`,
        },
      ],
    },
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
      <GuideSuggestions guide={guide} />
    </>
  );
}
