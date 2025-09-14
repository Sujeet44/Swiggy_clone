import { IMAGE_BASE_URL } from "../utils/ConstantIMG";

const Restaurant = (props) => {
  const { resData } = props;
  const { name, avgRatingString, sla, cuisines, areaName, costForTwo } =
    resData;
  return (
    <div className="whole-card">
      <div className="cards">
        <img
          alt="Image loading.."
          src={IMAGE_BASE_URL + resData.cloudinaryImageId}
        ></img>
      </div>
      <div className="card-info">
        <h3>{name.length>25?name.slice(0,25)+" ...":name}</h3>
        <h4>
          {avgRatingString} • {sla.slaString}
        </h4>
        <h4>{costForTwo}</h4>
        <h5>
          {cuisines.length > 3
            ? cuisines.slice(0, 3).join(", ") + ", ..."
            : cuisines.join(", ")}
        </h5>
        <h5>{areaName}</h5>
      </div>
    </div>
  );
};


export const withPromotedLable=(Restaurant)=>{
  return(props)=>{
    return(
      <div>
        {/* <label className="bg-black absolute text-white z-10 px-2 my-2 rounded-xl">Top rated</label> */}
        <Restaurant {...props}/>
      </div>
    )
  }
}


export default Restaurant;
