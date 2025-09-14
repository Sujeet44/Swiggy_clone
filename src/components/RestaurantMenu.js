import { useState } from "react";
import ItemList from "./ItemList";

function RestaurantMenu({ data,showItems,setShowIndex}) {
  const { title } = data;
  const [arrow, setArrow] = useState("↓");

  const handleClick = () => {
    setShowIndex()
    console.log("Clicked!");
    arrow === "↓" ? setArrow("↑") : setArrow("↓");
  };

  return (
    <div className="">
      <div className="border-t-16 border-[rgba(2,6,12,0.05)]"></div>

      <div className="flex justify-between items-center px-5 cursor-pointer" onClick={handleClick}>
        <span className="font-extrabold my-4 text-l">
          {title} ({data.itemCards.length})
        </span>
        <span> {arrow} </span>
      </div>
      {showItems && ( <ItemList key={data.itemCards.id} items={data.itemCards}></ItemList>)}
    </div>
  );
}

export default RestaurantMenu;
