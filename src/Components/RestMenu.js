import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestMenu from "../utils/useRestMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestMenu = () => {
  const { resId } = useParams();

  const restInfo = useRestMenu(resId);

  const [showItem, setShowItem] = useState(null);

  if (restInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restInfo?.cards[0]?.card?.card?.info;

  const categories =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

  //console.log("name", categories);

  return (
    <div className="rest-Menu">
      <h1 className="text-center font-bold text-2xl p-1">{name}</h1>
      <h3 className="text-center p-1">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <h2 className="text-center font-bold text-xl p-1">MENU</h2>
      {/* categories accordions */}
      {categories.map((eachCategory, index) => (
        <RestaurantCategory
          key={eachCategory?.card?.card.title}
          data={eachCategory?.card?.card}
          //Controlling Child component
          showItem={index === showItem && true}
          setShowItem={
            showItem === index
              ? () => setShowItem(null)
              : () => setShowItem(index)
          }
        />
      ))}
    </div>
  );
};

export default RestMenu;
