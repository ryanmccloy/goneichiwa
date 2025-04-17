import ArrowLinkRight from "../ui/ArrowLinkRight";
import ProductReview from "./ProductReview";

export default function ProductReviews({ reviews }) {
  // const reviews = [
  //   {
  //     review:
  //       "The perfect Banff guide! The hiking routes were amazing, and the restaurant tips were spot on.",
  //     author: "Ryan M",
  //   },
  //   {
  //     review:
  //       "We followed this itinerary exactly, and it made our trip 100x easier. Highly recommend!",
  //     author: "Ieva V",
  //   },
  // ];

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
