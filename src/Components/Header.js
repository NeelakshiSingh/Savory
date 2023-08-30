import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Body from "./Body";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = (props) => {
  const [btnName, setbtnName] = useState("Login");

  const handleHomeClick = () => {
    return <Body />;
  };

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header flex justify-between bg-amber-200 p-8">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items flex">
        <ul className="flex items-center px-2">
          <li className="px-2 text-xl font-semibold">
            {onlineStatus ? "Online Status-✅" : "Online Status:🔴"}
          </li>
          <li
            className="px-2 text-xl font-semibold hover:text-slate-500"
            
          >
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 text-xl font-semibold hover:text-slate-500">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2 text-xl font-semibold hover:text-slate-500">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2 text-xl font-semibold hover:text-slate-500">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2 text-xl font-semibold">
            <Link to="/cart">Cart({cartItems.length})</Link>
          </li>
          <li>
            <button
              className="log-btn px-2 text-xl font-semibold hover:text-slate-500"
              onClick={() => {
                btnName === "Login"
                  ? setbtnName("Logout")
                  : setbtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="px-2 text-xl font-semibold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
