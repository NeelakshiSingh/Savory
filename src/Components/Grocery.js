import useOnlineStatus from "../utils/useOnlineStatus";

const Grocery = () => {
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
  return (
    <div className="grocery-vertical font-bold text-2xl p-4">
      <h1>Our Grocery Vertical is Live now!!!🥳</h1>
    </div>
  );
};

export default Grocery;
