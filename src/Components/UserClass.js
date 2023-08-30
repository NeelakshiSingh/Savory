import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: [
        {
          name: "Dummy",
          location: "Default",
        },
      ],
    };
    console.log("Child Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/NeelakshiSingh");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    this.timer = setInterval(() => {
      console.log("Hanging Timer");
    }, 1000);
    console.log("Child componentDidMount");
  }

  componentDidUpdate() {
    console.log("Child componentDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Child componentWillUnmount");
  }

  render() {
    console.log("Child render");
    const { name, location } = this.state.userInfo;

    return (
      <div className="user-card border border-solid border-black p-4">
        <h2 >Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: neelaxhi15@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
