import React from "react";
import { ReactComponent as PresentsSVG } from "../../assets/images/presents.svg";
import "./home.scss";
import { withRouter } from "react-router-dom";
import { PATHS } from "../../constants/PATHS";

const Home = ({ history }) => (
  <div className="home">
    <div className="left">
      <h1>
        WRAP YOUR <br />
        ONLINE GIFT
      </h1>
      <p>
        Give online gifts in a fun way that recreates the gift-opening
        experience!
      </p>
      <div className="buttons-container">
        <button onClick={() => history.push(PATHS.NEW_GIFT)}>Wrap gift</button>
        <button>Learn more</button>
      </div>
    </div>
    <div className="right">
      <PresentsSVG />
    </div>
  </div>
);

export default withRouter(Home);
