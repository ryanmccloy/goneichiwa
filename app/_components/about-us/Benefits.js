import BenefitCard from "./BenefitCard";

const cards = [
  {
    url: "/images/tokyo.webp",
    alt: "Tokyo Street",
    title: "Save Hours of Planning",
    description:
      " Skip the research and let us do the work! Our expertly designed itineraries give you a step-by-step guide to the best spots, so you can explore stress-free.",
  },
  {
    url: "/images/seceda.webp",
    alt: "Seceda Mountain",
    title: "Local Insider Tips",
    description:
      "Go beyond the tourist hotspots! Our guides feature insider tips, local favorites, and off-the-beaten-path experiences for a more authentic adventure.",
  },
  {
    url: "/images/yosemite.webp",
    alt: "Yosemite Mountain",
    title: "Instant Download",
    description:
      "No delays—download your itinerary immediately and access it offline on any device. Travel smart with everything you need at your fingertips.",
  },
  {
    url: "/images/lofoten.webp",
    alt: "Lofoten Islands",
    title: "Budget & Time-Friendly",
    description:
      "Make the most of your trip without overspending! Our itineraries include time-efficient routes and budget-friendly options for every traveler.",
  },
];

export default function Benefits() {
  return (
    <div className="grid gap-30 md:grid-cols-2 [@media(min-width:1310px)]:grid-cols-4">
      {cards.map((card, index) => {
        return (
          <BenefitCard
            key={index}
            url={card.url}
            alt={card.alt}
            title={card.title}
            description={card.description}
          />
        );
      })}
    </div>
  );
}
