import SectionHeading from "../_components/ui/SectionHeading";
import Slider from "../_components/ui/Slider";
import TrendingCardMobile from "./TrendingCardMobile";

export default function TrendingGuidesMobile({ trending }) {
  return (
    <div className="block lg:hidden">
      <SectionHeading>Featured Guides</SectionHeading>

      <Slider>
        {trending.map((guide) => (
          <TrendingCardMobile
            key={guide.title}
            title={guide.title}
            url={guide.url}
            alt={guide.alt}
            href={guide.href}
          />
        ))}
      </Slider>
    </div>
  );
}
