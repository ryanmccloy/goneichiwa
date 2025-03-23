import SectionHeading from "../ui/SectionHeading";
import Slider from "../ui/Slider";
import ArticleCard from "./ArticleCard";

function FeaturedArticlesMobile({ featured }) {
  return (
    <div className="block lg:hidden">
      <Slider>
        {featured.map((article) => (
          <ArticleCard
            key={article.title}
            title={article.title}
            url={article.url}
            alt={article.alt}
            href={article.href}
            tags={article.tags}
          />
        ))}
      </Slider>
    </div>
  );
}

export default FeaturedArticlesMobile;
