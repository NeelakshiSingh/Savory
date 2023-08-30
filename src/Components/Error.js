import { useRouteError } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Error = () => {
  const err = useRouteError();

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
    <div>
      <h1 className="font-bold text-2xl p-4">Oops!!!</h1>
      <h2 className="font-bold text-2xl p-4">Something went wrong!!</h2>
      <h3>
        {err.status} : {err.statusText}
      </h3>
    </div>
  );
};
export default Error;
