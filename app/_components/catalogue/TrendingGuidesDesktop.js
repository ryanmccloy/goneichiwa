import SectionHeading from "../ui/SectionHeading";
import TrendingCardDesktop from "./TrendingCardDesktop";

export default function TrendingGuidesDesktop({ trending }) {
  return (
    <div className="hidden lg:grid grid-cols-[60%_40%] gap-15 h-[550px]">
      <div className="grid grid-rows-[auto_1fr] h-full">
        <div className=" -mb-30 lg:-mb-60">
          <SectionHeading>Featured Guides</SectionHeading>
        </div>
        {/* Left side: first card only */}
        <TrendingCardDesktop {...trending[0]} />
      </div>

      <div className="grid grid-rows-2 gap-15 h-full">
        {/* Right side: remaining cards */}
        {trending.slice(1).map((guide) => (
          <TrendingCardDesktop
            key={guide.title}
            title={guide.title}
            url={guide.url}
            alt={guide.alt}
            href={guide.href}
          />
        ))}
      </div>
    </div>
  );
}
