import React from "react";
import Logo from "../logo/logo";
import Icon from "../../assets/icons";
import { FACEBOOK, INSTAGRAM, TWITTER, YOUTUBE } from "../../constants/ICONS";
import { Link } from "react-router-dom";
import { PATHS } from "../../constants/PATHS";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to={PATHS.HOME}>
        <Logo />
      </Link>
      <nav>
        <ul className="nav-items">
          <Link to="/">About</Link>
          <Link to="/">Services</Link>
          <Link to="/">Contact</Link>
        </ul>
      </nav>
      <ul className="social-items">
        <Link to="/">
          <Icon name={INSTAGRAM} />
        </Link>
        <Link to="/">
          <Icon name={TWITTER} />
        </Link>
        <Link to="/">
          <Icon name={FACEBOOK} />
        </Link>
        <Link to="/">
          <Icon name={YOUTUBE} />
        </Link>
      </ul>
    </div>
  );
};

export default Header;
