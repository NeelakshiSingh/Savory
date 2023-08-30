import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "./CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center w-6/12 mx-auto m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button className="bg-black text-white m-2 px-2 rounded" onClick={handleClearCart}>
        Clear Cart
      </button>
      {cartItems.length === 0 && (
        <h1 className="m-4">Cart is empty.Please add items to cart!🍔</h1>
      )}
      <ItemList items={cartItems} />
    </div>
  );
};

export default Cart;
