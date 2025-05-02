// export async function generateMetadata({ params }) {
//   const post = await getBlogPostById(params.articleId);

//   if (!post) {
//     return {
//       title: "Article Not Found",
//       description: "We couldn't find the blog post you're looking for.",
//     };
//   }

//   const { title, metaDescription, coverImage } = post;

//   return {
//     title: `${title}`,
//     description: metaDescription || `Read insights, tips, and travel inspiration in our latest post: ${title}.`,
//     openGraph: {
//       title: `${title} | Goneichiwa Blog`,
//       description: metaDescription || `Discover the story: ${title}`,
//       images: [
//         {
//           url: coverImage?.url || "/default-og-image.jpg",
//           width: 1200,
//           height: 630,
//           alt: `${title} cover image`,
//         },
//       ],
//     },
//   };
// }

export default function Page() {
  return <h1>Article</h1>;
}
