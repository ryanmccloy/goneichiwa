import SectionHeading from "../ui/SectionHeading";
import ArticleCard from "./ArticleCard";

export default function AllBlogPosts() {
  const allArticles = [
    {
      title: "7 Day Dolomite Itinerary",
      href: "",
      url: "/images/blog/dolomites2.webp",
      alt: "Italian Dolomoites",
      tags: ["Italy", "Outdoors"],
    },
    {
      title: "What to do in Banff",
      href: "",
      url: "/images/blog/banff.webp",
      alt: "Banff Avenue",
      tags: ["Canada", "Sightseeing"],
    },
    {
      title: "Chamonix Ski Guide",
      href: "",
      url: "/images/blog/chamonix.webp",
      alt: "Chamonix Mountain",
      tags: ["France", "Winter"],
    },
    {
      title: "Best neighbourhoods to explore in tokyo",
      href: "",
      url: "/images/blog/tokyo.webp",
      alt: "Tokyo Neighbourhood",
      tags: ["Japan", "Sightseeing"],
    },
    {
      title: "Ultimate Rome weekend itinerary",
      href: "",
      url: "/images/blog/rome.webp",
      alt: "Roman Colessuem",
      tags: ["Italy", "Sightseeing"],
    },
    {
      title: "10 Must do hikes in the italian Dolomites",
      href: "",
      url: "/images/blog/dolomites.webp",
      alt: "Italian Dolomoites",
      tags: ["Italy", "Outdoors"],
    },
  ];

  return (
    <section className="width-size section-styles negative-top-spacing">
      <SectionHeading>All Blog Posts</SectionHeading>

      <div className="grid gap-x-30 gap-y-60 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {allArticles.map((article) => {
          return (
            <ArticleCard
              key={article.title}
              title={article.title}
              href={article.href}
              url={article.url}
              alt={article.alt}
              tags={article.tags}
            />
          );
        })}
      </div>
    </section>
  );
}
