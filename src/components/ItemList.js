import { useDispatch } from "react-redux";
import { IMAGE_BASE_URL } from "../utils/ConstantIMG";
import { addItem } from "../utils/CartSlice";
import { useState } from "react";

const ItemList=({ items })=> {

  const dispatch =useDispatch();
  const handleAddItem=(item)=>{
    dispatch(addItem(item))
  }
  // console.log(items);

  // const {name,price,imageId,description,itemAttribute,offerTags,category,} = items.card.info;

  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="flex justify-center flex-col items-center">
          <div className="menu-card flex justify-between mx-5">
            <div className="card-details w-10/12">
              <div className="menu-pname font-extrabold text-l">
                {item.card.info.name}
              </div>
              <div className="card-price font-extrabold">₹{item.card.info.price / 100 || item.card.info?.variantsV2?.pricingModels?.[0]?.price / 100}
              </div>
              <div className="card-rating my-3 text-sm">
                {item.card.info.ratings.aggregatedRating.rating ||
                  item.card.info.category}
                <span>
                  ({item.card.info.ratings.aggregatedRating.ratingCount})
                </span>
              </div>
              <div className="card-description">
                {item.card.info.description?.length > 150 ? (<> {item.card.info.description.slice(0, 151)}
                    <span className="font-bold cursor-pointer text-sm">...more</span></>) : (
                  item.card.info.description
                )}
              </div>
            </div>
            <div className="menu-card-img w-2/12 flex flex-col items-center justify-center">
              <img className="rounded-2xl" alt="Image loading..." src={IMAGE_BASE_URL + item.card.info.imageId} style={{ objectFit: "cover", cursor: "pointer" }}
              >
              </img>
              <button className="w-[100%] p-2 shadow-2xl border border-solid mt-1.5 px-5 py-2 rounded-xl bg-white font-extrabold text-green-700 cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out"
               onClick={()=>handleAddItem(item)}>ADD</button> 
            </div>
          </div>
          <hr className="my-7 text-gray-400 w-[95%]" />
        </div>
      ))}
    </div>
  );
}

export default ItemList;
