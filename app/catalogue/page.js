import FullCatalogue from "@/app/_components/catalogue/FullCatalogue";
import TrendingGuides from "@/app/_components/catalogue/TrendingGuides.js";
import NewsLetter from "@/app/_components/newsletter/NewsLetter";
import { Suspense } from "react";
import SkeletonTrending from "../_components/skeletons/SkeletonTrending";
import SkeletonCatalogue from "../_components/skeletons/SkeletonCatalogue";

export const metadata = {
  title: "Catalogue",
  description:
    "Browse all Goneichiwa travel guides and destinations. Discover your next adventure.",
};
export default function Page() {
  return (
    <div className="top-page-spacing">
      <Suspense fallback={<SkeletonTrending />}>
        <TrendingGuides />
      </Suspense>
      <Suspense fallback={<SkeletonCatalogue />}>
        <FullCatalogue />
      </Suspense>
      <NewsLetter />
    </div>
  );
}
