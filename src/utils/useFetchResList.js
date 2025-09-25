import { useEffect, useState } from "react";

const useRestaurants = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

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
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  return {
    listOfRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
    searchText,
    setSearchText,
  };
};

export default useRestaurants;



// import { useState ,useEffect} from "react";

// const FetchResList = () => {
//   const [listOfRestaurants, setListOfRestaurant] = useState(null);
//   const [filterListOfRestaurants, setFilterListOfRestaurants] = useState([]);
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch("http://localhost:3000/swiggy-restaurants");
//     const json = await data.json();
//     // console.log(json);
//     setListOfRestaurant(
//       json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );
//     setFilterListOfRestaurants(
//       json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );
//   };
//   return listOfRestaurants,filterListOfRestaurants;
// };

// export default FetchResList;

