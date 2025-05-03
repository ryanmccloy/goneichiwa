import dynamic from "next/dynamic";
import SectionHeading from "../ui/SectionHeading";
import TrendingCardMobile from "./TrendingCardMobile";

const Slider = dynamic(() => import("../ui/Slider"));

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
