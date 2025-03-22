import Stars from "../landing/reviews-banner/Stars";

function ProductReview({ review, author }) {
  return (
    <div className="bg-white shadow-sm rounded-global p-5">
      <Stars />
      <span>{review}</span>
      <span className="mx-2">-</span>
      <span>{author}</span>
    </div>
  );
}

export default ProductReview;
