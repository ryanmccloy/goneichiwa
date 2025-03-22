import ArrowLinkLeft from "../ui/ArrowLinkLeft";
import ProductDescription from "./ProductDescription";
import ProductPageImages from "./ProductPageImages";
import ProductReviews from "./ProductReviews";

export default function ProductOverview() {
  return (
    <section className="top-page-spacing width-size flex flex-col gap-60 lg:grid lg:grid-cols-2 lg:gap-120">
      <div className="flex flex-col gap-15 ">
        <ArrowLinkLeft>Back To Guides</ArrowLinkLeft>
        <ProductPageImages />
        <div className="hidden lg:block lg:mt-[45px]">
          <ProductReviews />
        </div>
      </div>

      <ProductDescription />

      <div className="lg:hidden">
        <ProductReviews />
      </div>
    </section>
  );
}
