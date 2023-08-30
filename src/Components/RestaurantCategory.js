import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setShowItem }) => {
  const handleClick = () => setShowItem();
  return (
    <div className="w-6/12 mx-auto text-center my-4 p-4  bg-gray-50 shadow-lg">
      {/*Category Title */}
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="p1 font-bold">
          {data.title} (
          {data.itemCards
            ? data.itemCards?.length
            : data.categories[0]?.itemCards?.length}
          )
        </span>
        <span>🔽</span>
      </div>
      {/* Accordian Body */}
      {showItem && (
        <ItemList
          items={
            data.itemCards ? data.itemCards : data.categories[0]?.itemCards
          }
        />
      )}
    </div>
  );
};

export default RestaurantCategory;
