import { LOGO_URL } from "../utils/ConstantIMG";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store)=>store.cart.items);
  console.log(cartItems);

  const[login,setLogin]=useState("Login");
  
  const checkStatus = useOnlineStatus();
  const {loggedInUser}=useContext(UserContext);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <img className="w-" src={LOGO_URL}></img>
      </div>
      <div className="nav-list">
        <ul>
          <li>Online Status {checkStatus===false? "🔴 " :"🟢"}</li>
          <li><Link to="/">Search</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/grocery">Grocery Store</Link></li>
          <li><Link to="/cart">Cart({cartItems.length})</Link></li>
          <li><Link to="/signin">Sign In</Link></li>
          <li onClick={()=>{
            login==="Login"?setLogin("Logout"):setLogin("Login")
          }}>{login}</li>
          {/* <li>{loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;