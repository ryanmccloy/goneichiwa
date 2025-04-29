import SectionHeading from "../ui/SectionHeading";
import Slider from "../ui/Slider";
import TrendingCardMobile from "./TrendingCardMobile";

export default function TrendingGuidesMobile({ trending }) {
  return (
    <div className="block lg:hidden">
      <SectionHeading>Featured Guides</SectionHeading>

      <Slider>
        {trending.map((guide) => (
          <TrendingCardMobile
            key={guide.id}
            title={guide.title}
            url={guide.coverImageUrl}
            alt={guide.coverImageAlt}
            id={guide.id}
          />
        ))}
      </Slider>
    </div>
  );
}
