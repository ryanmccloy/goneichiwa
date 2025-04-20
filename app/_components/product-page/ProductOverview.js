import { getImageUrl } from "@/app/_lib/data-service";
import ProductDescription from "./ProductDescription";
import ProductPageImages from "./ProductPageImages";
import ProductReviews from "./ProductReviews";
import NoReviewsYet from "./NoReviewsYet";

export default async function ProductOverview({ guide }) {
  const { gallery, reviews } = guide;

  // getting downloadable path for gallery images
  const guideImages = await Promise.all(
    gallery.map(async (imageData) => {
      const url = await getImageUrl(imageData.path);
      return { url, alt: imageData.alt };
    })
  );

  // creating new guide object with appropraite image paths, and createAt timestamp which can be passed as a prop
  const guideWithImageUrl = {
    ...guide,
    coverImage: await getImageUrl(guide.coverImage.path),
    gallery: guideImages,
    createdAt: guide.createdAt?.seconds
      ? new Date(guide.createdAt.seconds * 1000).toISOString()
      : null,
  };

  const reviewsSection =
    Array.isArray(reviews) && reviews.length > 0 ? (
      <ProductReviews reviews={reviews} />
    ) : (
      <NoReviewsYet />
    );

  return (
    <section className="section-styles top-page-spacing   width-size flex flex-col gap-60 lg:grid lg:grid-cols-2 xl:gap-120">
      <div className="relative flex flex-col gap-15 ">
        <ProductPageImages images={guideWithImageUrl.gallery} />
        <div className="hidden lg:block lg:mt-[45px]">{reviewsSection}</div>
      </div>

      <ProductDescription guide={guideWithImageUrl} />

      <div className="lg:hidden">{reviewsSection}</div>
    </section>
  );
}
