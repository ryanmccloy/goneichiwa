import AllBlogPosts from "../_components/blog/AllBlogPosts";
import FeaturedArticles from "../_components/blog/FeaturedArticles";
import NewsLetter from "../_components/newsletter/NewsLetter";

export const metadata = {
  title: "Blog",
};

export default function Page() {
  const featuredArticles = [
    {
      title: "Best Neighbourhoods to explore in tokyo",
      href: "",
      url: "/images/featured/tokyo.webp",
      alt: "Tokyo Neighbourhood",
      tags: ["Japan", "Sightseeing"],
    },
    {
      title: "Best Things To Do In Rome",
      href: "",
      url: "/images/featured/rome.webp",
      alt: "Roman Colessuem",
      tags: ["Italy", "Sightseeing"],
    },
    {
      title: "10 Must do hikes in the italian Dolomites",
      href: "",
      url: "/images/featured/dolomites.webp",
      alt: "Italian Dolomoites",
      tags: ["Italy", "Outdoors"],
    },
  ];

  const newestArticles = [
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
  ];

  return (
    <div className=" top-page-spacing">
      <FeaturedArticles title="Featured Posts" featured={featuredArticles} />
      <FeaturedArticles title="Newest Posts" featured={newestArticles} />

      <AllBlogPosts />

      <NewsLetter />
    </div>
  );
}
