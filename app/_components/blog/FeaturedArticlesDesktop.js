import ArticleCard from "./ArticleCard";
import FeaturedArticleCardDesktop from "./FeaturedArticleCardDesktop";

function FeaturedArticlesDesktop({ featured }) {
  return (
    <div className="hidden lg:flex gap-30 h-[450px]">
      {featured.map((article, index) => {
        if (index === 0) {
          return (
            <FeaturedArticleCardDesktop
              key={article.title}
              title={article.title}
              url={article.url}
              alt={article.alt}
              href={article.href}
              tags={article.tags}
           
            />
          );
        } else {
          return (
            <ArticleCard
              key={article.title}
              title={article.title}
              url={article.url}
              alt={article.alt}
              href={article.href}
              tags={article.tags}
            />
          );
        }
      })}
    </div>
  );
}

export default FeaturedArticlesDesktop;
