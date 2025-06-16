import ArrowLinkRight from "../ui/ArrowLinkRight";
import SectionHeading from "../ui/SectionHeading";
import Slider from "../ui/Slider";
import ArticleCard from "./ArticleCard";

export default function FeaturedArticles({ title, articles }) {
  return (
    <section className="width-size section-styles negative-top-spacing">
      <div className="flex gap-15 lg:gap-30 flex-col lg:flex-row lg:items-center">
        <SectionHeading>{title}</SectionHeading>
        <div className="-mt-60 lg:mb-2">
          <ArrowLinkRight groupHover={false}>See All Posts</ArrowLinkRight>
        </div>
      </div>

      <div className="mt-30 lg:-mt-30">
        <Slider>
          <div className="flex gap-30 w-full">
            {articles.map((article, index) => (
              <ArticleCard
                index={index}
                key={article.title}
                title={article.title}
                href={article.href}
                url={article.url}
                alt={article.alt}
                tags={article.tags}
                featured={true}
              />
            ))}
          </div>
        </Slider>
      </div>
    </section>
  );
}
