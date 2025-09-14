import RestaurantMenu from "./RestaurantMenu";
import ShimmerForAbout from "./Shimmer2";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";

function About() {
  const [showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <ShimmerForAbout />;
  // const { itemCards } = resInfo?.cards?.find((card) => card.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find((c) => c.card?.card?.itemCards)?.card?.card;

  const categories = resInfo?.cards?.find((card) => card.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c)=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  // console.log(categories);


  
  const {name,cuisines,areaName,avgRatingString,totalRatingsString,costForTwoMessage,sla,} = resInfo?.cards?.[2]?.card?.card?.info;

  return (
    <div className="about px-85">
      <h2 className="text-2xl font-extrabold my-8">{name}</h2>
      <div className="about-overview border p-4 rounded-2xl border-gray-400 shadow-[-1px_11px_10px_14px_#282c3f26] border-gradient-to-b from-white-500 via-gray-300 to-gray-400">
        <div className="about-rating font-bold">
          {avgRatingString} ({totalRatingsString}) - {costForTwoMessage}
        </div>
        <div className="about-cuisines font-bold text-[#ff5200] underline my-2">{cuisines.join(", ")}</div>
        <div className="about-outlet font-light my-1">{areaName}</div>
        <div className="about-time font-extrabold">{sla.slaString}</div>
      </div>
      <div className="menu-card-container mt-20">
        {categories.map((category,index) => (
          <RestaurantMenu key={category?.card?.card?.categoryId} data={category?.card?.card} 
          showItems={index === showIndex ? true : false}
            setShowIndex={() =>
              setShowIndex((prevIndex) => (prevIndex === index ? null : index))
            }
           />
        ))}
      </div>
    </div>
  );
}

export default About;

// import { useEffect, useState } from "react";
// import Restaurant from "./Restaurant";
// import RestaurantMenu from "./RestaurantMenu";
// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";

// function About() {
//   const [resInfo, setResInfo] = useState(null);
//   const{resId}=useParams();

//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//      const data = await fetch(
//       "http://localhost:3000/swiggy-menu?restaurantId="+resId
//     );
//     const json = await data.json();
//     console.log(data);

//     setResInfo(
//       json.data.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards
//     );
//   };

//   if(resInfo) return <Shimmer/>

//   return (
//     <div className="menu-card-container">
//       {resInfo.map((res) => {
//         return (
//           <RestaurantMenu
//             key={res.card.info.id}
//             resData={res.card.info}
//           ></RestaurantMenu>
//         );
//       })}
//     </div>
//   );
// }

// export default About;
