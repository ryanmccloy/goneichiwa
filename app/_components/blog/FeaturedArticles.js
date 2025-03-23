import ArrowLinkRight from "../ui/ArrowLinkRight";
import SectionHeading from "../ui/SectionHeading";
import FeaturedArticlesDesktop from "./FeaturedArticlesDesktop";
import FeaturedArticlesMobile from "./FeaturedArticlesMobile";

export default function FeaturedArticles({ title, featured }) {
  return (
    <section className="width-size section-styles negative-bottom-spacing">
      <div className="flex gap-15 lg:gap-30 flex-col lg:flex-row lg:items-center">
        <SectionHeading>{title}</SectionHeading>
        <div className="-mt-60 lg:mb-2">
          <ArrowLinkRight groupHover={false}>See All Posts</ArrowLinkRight>
        </div>
      </div>

      <div className="mt-30 lg:-mt-30">
        <FeaturedArticlesMobile featured={featured} />
        <FeaturedArticlesDesktop featured={featured} />
      </div>
    </section>
  );
}
