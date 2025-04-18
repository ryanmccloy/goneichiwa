import { getImageUrl } from "../data-service";

export const formatGuidesWithImageUrl = async (guides) => {
  return await Promise.all(
    guides.map(async (guide) => ({
      ...guide,
      coverImageUrl: await getImageUrl(guide.coverImage.path),
      coverImageAlt: guide.coverImage.alt,
    }))
  );
};
