import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [menuInfo, setMenuInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        "https://backend-swiggy-v82q.onrender.com/swiggy-menu?restaurantId=" + resId
      );
      const json = await data.json();
      // console.log(json);

      const menuInfoo = json?.data?.cards?.find((c) => c.card)?.card?.card;
      const { text } = menuInfoo;
      setMenuInfo(menuInfo);
      console.log(text);

      // Safely find the REGULAR cards
      // const regularCards = json?.data?.cards?.find((card) => card.groupedCard)
      //   ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

      // Find the card that contains itemCards
      // const menuCard = regularCards?.find((c) => c.card?.card?.itemCards)?.card
      //   ?.card?.itemCards;

      setResInfo(json.data || []); // Fallback to empty array
    } catch (error) {
      console.error("Error fetching menu:", error);
      setResInfo([]); // Show empty list instead of crashing
    }
  };
  return resInfo;
};

export default useRestaurantMenu;
