import BestCard from "./BestCard";
import Slider from "../../ui/Slider";
import { getFormattedFeaturedGuides } from "@/app/_lib/helpers/getFormattedFeaturedGuides";

export default async function GuidesCards() {
  const guides = await getFormattedFeaturedGuides();

  if (!guides?.length) {
    return <p>We&apos;re having trouble displaying the featured guides :(</p>;
  }

  return (
    <Slider>
      {guides.map((guide, index) => (
        <BestCard
          key={guide.id}
          title={guide.title}
          url={
            guide.coverImageUrlFeatured
              ? guide.coverImageUrlFeatured
              : guide.coverImageUrl
          }
          alt={guide.coverImageAlt}
          lastCard={index === guides.length - 1}
          isActive={guide.isActive}
          id={guide.id}
        />
      ))}
    </Slider>
  );
}
