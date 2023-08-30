import { CDN_URL } from "../utils/constants";

const RestCard = (props) => {
  const { restData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    restData;

  const { deliveryTime } = restData?.sla;

  return (
    <div data-testid="restCard" className="rest-Card mr-16 my-8 p-2 w-[14rem] h-[22rem] bg-gray-200 hover:bg-gray-300 rounded-xl">
      <img
        className="restCardImg rounded-t-xl"
        alt="resLogo"
        src={CDN_URL + cloudinaryImageId}
      />

      <div className="textBox">
        <h3 className="font-bold text-base pt-4 pb-2">{name}</h3>
        <div className="body_1_bold">
          {cuisines.length > 5
            ? cuisines.join(", ").slice(0, 50) + "..."
            : cuisines.join(", ")}
        </div>
        <div className="body_1_bold">{avgRating} star</div>
        <div className="body_1_bold">{costForTwo}</div>
        <div className="body_1_bold">{deliveryTime} min</div>
      </div>
    </div>
  );
};

//Below is Higer Order Component example:

export const WithFlatDealLabel = (RestCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white my-2 mt-2 p-2 rounded-lg">
          Flat Deal
        </label>
        <RestCard {...props} />
      </div>
    );
  };
};

export default RestCard;
