import ProductDescription from "./ProductDescription";
import ProductPageImages from "./ProductPageImages";
import ProductReviews from "./ProductReviews";

export default function ProductOverview({ destination }) {
  return (
    <section className="section-styles top-page-spacing   width-size flex flex-col gap-60 lg:grid lg:grid-cols-2 xl:gap-120">
      <div className="relative flex flex-col gap-15 ">
        <ProductPageImages />
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
