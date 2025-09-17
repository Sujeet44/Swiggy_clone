import { useEffect, useState } from "react";

const useRestaurants = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://backend-swiggy-v82q.onrender.com/swiggy-restaurants");
      const json = await response.json();

      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (err) {
      console.error("Error fetching restaurants:", err);
      setError("Failed to load restaurants.");
    } finally {
      setLoading(false);
    }
  };

  return {
    listOfRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
    searchText,
    setSearchText,
    loading,
    error,
  };
};

export default useRestaurants;
