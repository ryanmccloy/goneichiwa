import FullCatalogue from "@/app/_components/catalogue/FullCatalogue";
import TrendingGuides from "@/app/_components/catalogue/TrendingGuides.js";
import NewsLetter from "@/app/_components/newsletter/NewsLetter";

export const metadata = {
  title: "Catalogue",
  description:
    "Browse all Goneichiwa travel guides and destinations. Discover your next adventure.",
};
export default function Page() {
  return (
    <div className="top-page-spacing">
      <TrendingGuides />

      <FullCatalogue />

      <NewsLetter />
    </div>
  );
}
