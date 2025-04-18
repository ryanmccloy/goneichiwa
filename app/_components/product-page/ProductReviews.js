import ArrowLinkRight from "../ui/ArrowLinkRight";
import ProductReview from "./ProductReview";

export default function ProductReviews({ reviews }) {
  return (
    <div className="flex flex-col gap-15 ">
      <div className="flex flex-col gap-15 md:gap-30">
        {reviews.map((review) => {
          return (
            <ProductReview
              key={review.author}
              review={review.review}
              author={review.author}
            />
          );
        })}
      </div>
      <div className="pl-5">
        <ArrowLinkRight>See All Reviews</ArrowLinkRight>
      </div>
    </div>
  );
}
