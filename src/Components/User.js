import { useState, useEffect } from "react";

const User = () => {
  const [userInfo, setUserInfo] = useState([]);
  // const [count2,setCount2] = useState(2);
  useEffect(() => {
    fetchData();

    const timer = setInterval(() => {
      console.log("Running Timer");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("useEffect return");
    };
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/NeelakshiSingh");
    const json = await data.json();
    setUserInfo(json);
  };

  const { name, location } = userInfo;

  console.log("Functional Compnent Render");

  return (
    <div className="user-card border border-solid border-black p-4">
      {/* <h1>COUNT1:{count1}</h1>
      <h1>COUNT2:{count2}</h1> */}
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: neelaxhi15@gmail.com</h4>
    </div>
  );
};
export default User;
