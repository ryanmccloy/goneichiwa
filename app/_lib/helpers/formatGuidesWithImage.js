import { getImageUrl } from "../data-service";

export const formatGuidesWithImage = async (guides) => {
  return Promise.all(
    guides.map(async (guide) => ({
      id: guide.id,
      destination: guide.title,
      price: guide.price,
      url: await getImageUrl(guide.coverImage.path),
      alt: guide.coverImage.alt,
    }))
  );
};
