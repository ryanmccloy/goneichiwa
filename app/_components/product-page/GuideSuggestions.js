import SectionHeading from "../ui/SectionHeading";
import Slider from "../ui/Slider";
import TravelGuideCard from "../catalogue/TravelGuideCard";
import ArrowLinkLeft from "../ui/ArrowLinkLeft";

export default function GuideSuggestions() {
  const suggestions = [
    {
      destination: "Rome",
      price: "£5",
      url: "/images/guides/rome.webp",
      alt: "rome",
    },
    {
      destination: "Florence",
      price: "£5",
      url: "/images/guides/florence.webp",
      alt: "florence",
    },
    {
      destination: "Venice",
      price: "£5",
      url: "/images/guides/venice.webp",
      alt: "venice",
    },
    {
      destination: "dolomites",
      price: "£15",
      url: "/images/guides/dolomites.webp",
      alt: "dolomites",
    },
    {
      destination: "Osaka",
      price: "£5",
      url: "/images/guides/osaka.webp",
      alt: "osaka",
    },
    {
      destination: "Fuji",
      price: "£5",
      url: "/images/guides/fuji.webp",
      alt: "Mt. Fuji",
    },
  ];

  return (
    <section className="section-styles width-size negative-bottom-spacing">
      <SectionHeading>You May Also Be Interested In...</SectionHeading>

      <Slider>
        {suggestions.map((suggestion) => {
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
