import SectionHeading from "../../ui/SectionHeading";
import CTACard from "./CTACard";

export default function FinalCTA() {
  const CTACards = [
    {
      title: " Browse Travel Guides",
      url: "/images/bestsellers/kyoto-pagoda.webp",
      href: "/catalogue",
    },
    {
      title: "Schedule A Video Consultation",
      url: "/images/bestsellers/wanaka.webp",
      href: "/consultations",
    },
  ];

  return (
    <section className="section-styles width-size">
      <SectionHeading>
        Ready To Expore The World Without The Hassle?
      </SectionHeading>

      <div className="flex flex-col gap-60 md:gap-30 md:flex-row">
        {CTACards.map((card) => {
          return (
            <CTACard
              key={card.title}
              title={card.title}
              url={card.url}
              href={card.href}
            />
          );
        })}
      </div>
    </section>
  );
}
