import { getImageUrl } from "../data-service";

export const formatGuidesWithImageUrl = async (guides) => {
  return await Promise.all(
    guides.map(async (guide) => ({
      ...guide,
      coverImageUrl: await getImageUrl(guide.coverImage.path),
      coverImageUrlFeatured: guide.coverImage.pathFeatured
        ? await getImageUrl(guide.coverImage.pathFeatured)
        : null,
      coverImageAlt: guide.coverImage.alt,
    }))
  );
};
