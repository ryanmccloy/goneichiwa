export const formatGuideIdRoute = (title) => {
  if (!title || typeof title !== "string") return "";
  return title.toLowerCase().replace(" ", "-");
};
