import RestCard, { WithFlatDealLabel } from "./RestCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Rest_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Body = () => {
  //Local State Variable Case
  let [listOfRestaurant, setlistOfRestaurant] = useState([]);
  let [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Rest_URL);
    const json = await data.json(); //converting to json string
    console.log(json);
    setlistOfRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const RestaurantCardFlatDeal = WithFlatDealLabel(RestCard); //Calling Higher Order Component(HOC)

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div>
        <h1 className="font-bold text-2xl p-4">
          Looks like you are offline!!!🤔
        </h1>
        <h1 className="font-bold text-2xl p-4">
          Please check your internet connection and try again🙂
        </h1>
      </div>
    );
  }

  return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body ml-8">
      <div className="filter">
        <input
          type="text"
          className="searchBox border border-solid border-black"
          data-testid="searchInput"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn mr-4 my-4 bg-slate-300 px-2 py-[2px] hover:bg-slate-400"
          onClick={() => {
            filteredRestaurant = listOfRestaurant.filter((eachVal) =>
              eachVal.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilteredRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn mr-4 my-4 bg-slate-300 px-2 py-[2px] hover:bg-slate-400"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (eachResVal) => eachResVal.info.avgRating > 4
            );
            //using HOOKS (useState) React rerenders the component as soon as variable is updated
            setfilteredRestaurant(filteredList);
          }}
        >
          Top rated restaurant
        </button>
        {/* using context below to update the userName on the fly */}
        <label className=" my-4 px-2 py-[2px]">UserName :</label>
        <input
          type="text"
          className="userName px-2 border border-solid border-black"
          value={loggedInUser}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>
      <div className="rest-Cont flex flex-wrap">
        {/* <RestCard restData={restList[0]} /> */}
        {filteredRestaurant?.map((eachIndexVal) => {
          return (
            <Link
              key={eachIndexVal.info.id}
              to={"/restaurants/" + eachIndexVal.info.id}
            >
              {eachIndexVal?.info?.aggregatedDiscountInfoV3?.discountTag ? (
                <RestaurantCardFlatDeal restData={eachIndexVal.info} /> //using HOC
              ) : (
                <RestCard restData={eachIndexVal.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
