import AllBlogPosts from "../_components/blog/AllBlogPosts";
import FeaturedArticles from "../_components/blog/FeaturedArticles";
import NewsLetter from "../_components/newsletter/NewsLetter";

export const metadata = {
  title: "Blog",
  description:
    "Travel tips, stories, and local insights. Read the latest from the Goneichiwa travel blog.",
};

export default function Page() {
  const featuredArticles = [
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

  const newestArticles = [
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
  ];

  return (
    <div className=" top-page-spacing ">
      <div className="bg-accent-blue border-b border-white   text-center py-2 px-4">
        🚧 Our travel blog is launching soon. Stay tuned for wanderlust-worthy
        reads! 🚧
      </div>
      <FeaturedArticles title="Featured Posts" featured={featuredArticles} />
      <FeaturedArticles title="Newest Posts" featured={newestArticles} />

      <AllBlogPosts />

      <NewsLetter />
    </div>
  );
}
