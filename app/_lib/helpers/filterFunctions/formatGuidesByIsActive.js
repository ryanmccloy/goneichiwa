export const formatGuidesByIsActive = (guides) => {
  return [...guides].sort((a, b) => b.isActive - a.isActive);
};
