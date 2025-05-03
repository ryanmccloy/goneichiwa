import TrendingGuidesDesktop from "./TrendingGuidesDesktop";
import TrendingGuidesMobile from "./TrendingGuidesMobile";
import { getFormattedFeaturedGuides } from "@/app/_lib/helpers/getFormattedFeaturedGuides";

export default async function TrendingGuides() {
  const guides = await getFormattedFeaturedGuides();

  if (!guides?.length)
    return (
      <p>
        We&apos;re having trouble displaying the featured guides. Please try
        again later.
      </p>
    );

  return (
    <section className="width-size">
      <TrendingGuidesMobile trending={guides.slice(0, guides.length - 1)} />
      <TrendingGuidesDesktop trending={guides.slice(0, 3)} />
    </section>
  );
}
