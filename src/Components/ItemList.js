import { useDispatch } from "react-redux";
import { addItem, removeItem } from "./CartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (eachItem) => {
    dispatch(addItem(eachItem));
  };

  const handleRemoveItem=(eachItem)=>{
    dispatch(removeItem(eachItem));
  };

  return (
    <div>
      {items.map((eachItem) => (
        <div
        data-testid="foodItems" 
          key={eachItem.card.info.Id}
          className="border-b-2 m-2 p-2 pb-4 flex justify-between"
        >
          <div className="text-left w-10/12 mr-4 ">
            <div>
              <span className="font-semibold">
                {eachItem.card.info.name}- ₹
              </span>
              <span className="font-semibold">
                {eachItem.card.info.price / 100 ||
                  eachItem.card.info.defaultPrice / 100}
              </span>
            </div>
            <div className="text-xs mt-2">
              {eachItem.card.info.description || eachItem.card.info.category}
            </div>
          </div>
          <div className="w-2/12 relative flex justify-center items-end">
            <img src={CDN_URL + eachItem.card.info.imageId} />
            <div className="absolute flex justify-evenly bg-gray-200 w-16 top-14 rounded-md shadow-lg">
              <button onClick={() => handleRemoveItem(eachItem)}>-</button>
              <span className="cursor-default">Add</span>
              <button onClick={() => handleAddItem(eachItem)}>+</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
