import SectionHeading from "../ui/SectionHeading";
import Slider from "../ui/Slider";
import TrendingCardMobile from "./TrendingCardMobile";

export default function TrendingGuidesMobile({ trending }) {
  return (
    <div className="block lg:hidden">
      <SectionHeading>Featured Guides</SectionHeading>

      <Slider>
        {trending.map((guide) => (
          <TrendingCardMobile key={guide.id} guide={guide} />
        ))}
      </Slider>
    </div>
  );
}
