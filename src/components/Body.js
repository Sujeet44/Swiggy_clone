import Restaurant,{withPromotedLable} from "./Restaurant";
import { filterRestaurantsByCost } from "./Functions";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurants from "../utils/useFetchResList";

const Body = () => {
  const {listOfRestaurants,filteredRestaurants,setFilteredRestaurants,searchText,setSearchText} = useRestaurants();

  const onlineStatus = useOnlineStatus();
  if(onlineStatus===false)return  "Looks like your offline";

  const RestaurantCardPromoted = withPromotedLable(Restaurant);

  if (listOfRestaurants === null) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search-container">
        <input type="text" className="search-box" placeholder="Search for restaurant and food" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}></input>
        <button
          className="search-btn"
          onClick={() => {
            const searchByName = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(searchByName);
          }}>
          Search
        </button>
      </div>

      <hr className="text-gray-300"/>
      <div className="flex gap-10">
      <div className="filter-widget w-2/12 sm:w-4/12">
      <h3>Restaurants with online food delivery</h3>
        <ul>
          <li onClick={() => {setFilteredRestaurants(listOfRestaurants);}}>
              <span>Filter</span>
          </li>
          <li><span>Sort By</span></li>
          <li><span>Fast Delivery</span></li>
          <li>
            <button className="btn" onClick={() => {const filteredList = listOfRestaurants.filter((res) => res.info.avgRating >= 4.4);
                console.log(filteredList);
                setFilteredRestaurants(filteredList);
              }}>
              <span>Ratings 4.0+</span>
            </button>
          </li>
          <li><span>Pure Veg</span></li>
          <li><span>Offers</span></li>
          <li>
            <button className="btn" onClick={() => {const filtered = filterRestaurantsByCost(listOfRestaurants,300,500);
                console.log(filtered);
                setFilteredRestaurants(filtered);
              }}>
              <span>Rs. 300-600</span>
            </button>
          </li>
          <li>
            <button className="btn" onClick={() => {const filteredByCost = listOfRestaurants.filter((restaurant) => {
                    const costString = restaurant.info.costForTwo; // e.g., "₹400 for two"
                    const costMatch = costString.match(/\d+/); // Extracts first number
                    const cost = costMatch ? parseInt(costMatch[0]) : 0;
                    return cost <= 300; // Adjust your range here
                  });
                console.log(filteredByCost);
                setFilteredRestaurants(filteredByCost);
              }}>
              <span>Under Rs.300</span>
            </button>
          </li>
        </ul>
      </div>
      <div className="outer-wrapper w-10/12">

      <div className="card-container">
        {filteredRestaurants.map((res) => (
          <Link  key={res.info.id} to={"/restaurants/"+res.info.id}>
            {res.info.avgRating>=4.5?<RestaurantCardPromoted resData={res.info}/>:<Restaurant resData={res.info} />}
            </Link>
        ))}
      </div>
      </div>
      </div>
    </div>
  );
};

export default Body;
