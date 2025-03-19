import FullCatalogue from "@/app/catalogue/FullCatalogue";
import TrendingGuides from "@/app/catalogue/TrendingGuides.js";
import NewsLetter from "@/app/_components/newsletter/NewsLetter";

export const metadata = {
  title: "Catalogue",
};

export default function Page() {
  return (
    <div>
      <TrendingGuides />
      <FullCatalogue />
      <NewsLetter />
    </div>
  );
}
