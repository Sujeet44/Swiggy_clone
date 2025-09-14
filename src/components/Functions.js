
export const filterRestaurantsByCost = (restaurants, min, max) => {
  return restaurants.filter((restaurant) => {
    const costMatch = restaurant?.info?.costForTwo?.match(/\d+/);
    const cost = costMatch ? parseInt(costMatch[0]) : 0;
    return cost >= min && cost <= max;
  });
};

