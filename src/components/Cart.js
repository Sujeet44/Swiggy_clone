import { clearCard } from "../utils/CartSlice";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCard());
    // console.log("df");
  };

  return (
    <div className="px-85 m-auto">
      <h1 className="font-extrabold text-3xl my-8">Cart</h1>
      <ItemList items={cartItems} showRemoveButton={true}/>
      {cartItems.length === 0 ? (
        <>
        <h1>Cart is empty. Add items to the cart</h1>
        <Link to="/">
        <button
          className="p-2 mt-4 rounded-lg bg-black text-white cursor-pointer hover:bg-orange-600 transition duration-300 ease-in-out"
          onClick={handleClearCart} 
        >
          Add items
        </button>
        </Link>
        </>
      ) :
        (
        <button
          className="p-2 m-2 rounded-lg bg-black text-white cursor-pointer hover:bg-orange-600 transition duration-300 ease-in-out"
          onClick={handleClearCart} 
        >
          ClearCard
        </button>
      )}
    </div>
  );
};

export default Cart;
