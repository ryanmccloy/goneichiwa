import FullCatalogue from "@/app/catalogue/FullCatalogue";
import TrendingGuides from "@/app/catalogue/TrendingGuides.js";
import NewsLetter from "@/app/_components/newsletter/NewsLetter";

export const metadata = {
  title: "Catalogue",
};

export default function Page() {
  return (
    <div className="  pt-[135px] md:pt-[165px] lg:pt-[195px]">
      <TrendingGuides />
      <FullCatalogue />
      <NewsLetter />
    </div>
  );
}
