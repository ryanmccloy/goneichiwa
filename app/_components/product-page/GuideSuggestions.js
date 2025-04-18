import SectionHeading from "../ui/SectionHeading";
import Slider from "../ui/Slider";
import TravelGuideCard from "../catalogue/TravelGuideCard";
import ArrowLinkLeft from "../ui/ArrowLinkLeft";
import {
  getTravelGuidesByContinent,
  getTravelGuidesByCountry,
} from "@/app/_lib/data-service";
import { formatGuidesWithImage } from "@/app/_lib/helpers/formatGuidesWithImage";
import { formatSuggestedGuides } from "@/app/_lib/helpers/formatSuggestedGuides";

export default async function GuideSuggestions({
  country,
  continent,
  currentGuide,
}) {
  // fetching travel guides in same country
  const relatedCountryGuides = await getTravelGuidesByCountry(country);
  const suggestedGuidesByCountry = await formatGuidesWithImage(
    relatedCountryGuides
  );

  //fetching travel guides in same continent
  const relatedContinentGuides = await getTravelGuidesByContinent(continent);
  const suggestedGuidesByContinent = await formatGuidesWithImage(
    relatedContinentGuides
  );

  // sorting related guides to avoid duplicates and current guide
  const suggestedGuides = formatSuggestedGuides(
    suggestedGuidesByCountry,
    suggestedGuidesByContinent,
    currentGuide
  );

  // early return if no suggestions
  if (suggestedGuides.length === 0) return null;

  // returning suggestions if there are any
  return (
    <section className="section-styles width-size negative-bottom-spacing">
      <SectionHeading>You May Also Be Interested In...</SectionHeading>

      <Slider>
        {suggestedGuides.map((suggestion) => {
          return (
            <TravelGuideCard
              key={suggestion.destination}
              destination={suggestion.destination}
              price={suggestion.price}
              url={suggestion.url}
              alt={suggestion.alt}
              suggestion={true}
            />
          );
        })}
      </Slider>
      <div className="mt-30">
        <ArrowLinkLeft>View All Guides</ArrowLinkLeft>
      </div>
    </section>
  );
}
