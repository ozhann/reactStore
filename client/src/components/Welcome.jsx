import React from "react";
import dogPic from "../images/Intersect.png";

class Welcome extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="welcome-section">
        <div className="starter-dog">
          <img src={dogPic} alt={"logo"} />
        </div>
        <div className="slogan-section">
          {" "}
          <h1>We take good care of your best friend.</h1>
          <h3>
            Lorem Ipsuem Neque porro quisquam est qui dolorem ipsum quia dolor .
          </h3>
          <button>Check out the products</button>
        </div>
      </div>
    );
  }
}

export default Welcome;
