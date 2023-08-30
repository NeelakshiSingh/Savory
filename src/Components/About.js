import { useContext } from "react";
import User from "./User";
import UserClass from "./UserClass";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
// import { Component } from "react";

const About = () => {
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
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
      <h1 className="font-bold text-2xl p-4">About Us</h1>
      <h2>{loggedInUser}</h2>
      <UserClass />
      <User />
    </div>
  );
};

// class About extends Component {
//   constructor(props) {
//     super(props);
//     console.log("Parent Constructor");
//   }

//   componentDidMount() {
//     console.log("Parent componentDidMount");
//   }

// render() {
// console.log("Parent render");

//     return (
//       <div>
//         <h1 className="font-bold text-2xl p-4">About Us</h1>
// using Context in class Component
// <h2><UserContext.Consumer>
// {(loggedInUser)=>(<h1>Neelakshi</h1>))}</UserContext.Consumer></h2>
//         <UserClass />
//         <User />
//       </div>
//     );
//   }
// }

export default About;
