export const formatSuggestedGuides = (country, continent, current) => {
  const finalSuggestions = [];

  country.forEach((guide) => {
    if (
      guide.id !== current &&
      !finalSuggestions.some((g) => g.id === guide.id)
    ) {
      finalSuggestions.push(guide);
    }
  });

  continent.forEach((guide) => {
    if (
      guide.id !== current &&
      !finalSuggestions.some((g) => g.id === guide.id)
    ) {
      finalSuggestions.push(guide);
    }
  });

  return finalSuggestions;
};
