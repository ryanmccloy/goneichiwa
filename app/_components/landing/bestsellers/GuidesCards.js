import BestCard from "./BestCard";
import Slider from "../../ui/Slider";

export default function GuidesCards({ guides }) {
  if (!guides?.length)
    return (
      <p>
        We&apos;re having trouble displaying the featured guides. Please try
        again later.
      </p>
    );

  return (
    <Slider>
      {guides.map((guide, index) => (
        <BestCard
          key={guide.id}
          title={guide.title}
          url={guide.coverImageUrl}
          alt={guide.coverImageAlt}
          lastCard={index === guides.length - 1}
          isActive={guide.isActive}
          id={guide.id}
        />
      ))}
    </Slider>
  );
}
