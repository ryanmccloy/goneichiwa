export const formatCartItem = (guide) => {
  if (!guide.stripePriceId) {
    throw new Error(`Missing stripePriceId for guide: ${guide.title}`);
  }

  return {
    id: guide.id,
    title: guide.title,
    price: guide.price,
    image: guide.coverImageUrl,
    stripePriceId: guide.stripePriceId,
    quantity: 1,
  };
};
