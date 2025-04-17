import { getSpecificTravelGuide, getImageUrl } from "@/app/_lib/data-service";
import ProductDescription from "./ProductDescription";
import ProductPageImages from "./ProductPageImages";
import ProductReviews from "./ProductReviews";

export default async function ProductOverview({ destination }) {
  const guide = await getSpecificTravelGuide(destination);

  const { gallery } = guide;

  const guideImages = await Promise.all(
    gallery.map(async (imageData) => {
      const url = await getImageUrl(imageData.path);
      return { url, alt: imageData.alt };
    })
  );

  return (
    <section className="section-styles top-page-spacing   width-size flex flex-col gap-60 lg:grid lg:grid-cols-2 xl:gap-120">
      <div className="relative flex flex-col gap-15 ">
        <ProductPageImages images={guideImages} />
        <div className="hidden lg:block lg:mt-[45px]">
          <ProductReviews />
        </div>
      </div>

      <ProductDescription destination={destination} />

      <div className="lg:hidden">
        <ProductReviews />
      </div>
    </section>
  );
}
