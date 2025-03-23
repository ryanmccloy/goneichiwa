import SectionHeading from "../ui/SectionHeading";
import ArticleCard from "./ArticleCard";

export default function AllBlogPosts() {
  const allArticles = [
    {
      title: "Best Ramen in tokyo",
      href: "",
      url: "/images/featured/tokyo.webp",
      alt: "Tokyo Neighbourhood",
      tags: ["Japan", "Sightseeing"],
    },
    {
      title: "Why Is Rome The Perfect Weekend Getaway?",
      href: "",
      url: "/images/featured/rome.webp",
      alt: "Roman Colessuem",
      tags: ["Italy", "Sightseeing"],
    },
    {
      title: "7 Day Dolomite Itinerary",
      href: "",
      url: "/images/featured/dolomites.webp",
      alt: "Italian Dolomoites",
      tags: ["Italy", "Outdoors"],
    },
    {
      title: "Best Ramen in Osaka",
      href: "",
      url: "/images/featured/tokyo.webp",
      alt: "Tokyo Neighbourhood",
      tags: ["Japan", "Sightseeing"],
    },
    {
      title: "Best Pasta in Rome?",
      href: "",
      url: "/images/featured/rome.webp",
      alt: "Roman Colessuem",
      tags: ["Italy", "Sightseeing"],
    },
    {
      title: "Where To Stay In The Dolomites",
      href: "",
      url: "/images/featured/dolomites.webp",
      alt: "Italian Dolomoites",
      tags: ["Italy", "Outdoors"],
    },
  ];

  return (
    <section className="width-size section-styles negative-bottom-spacing">
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
