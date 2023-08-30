import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";

const useRestMenu = (resId) => {
  const [restInfo, setRestInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setRestInfo(json.data);
  };

  return restInfo;
};

export default useRestMenu;
