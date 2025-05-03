import dynamic from "next/dynamic";
import SectionHeading from "../ui/SectionHeading";
import TrendingCardMobile from "./TrendingCardMobile";

export default function TrendingGuidesMobile({ trending }) {
  const Slider = dynamic(() => import("../ui/Slider"));
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
