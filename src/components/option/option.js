import React from "react";
import "./option.scss";

const Option = ({ icon, children }) => (
  <div className="option">
    <div className="icon">{icon}</div>
    <div className="content">{children}</div>
    <div className="expand">+</div>
  </div>
);

export default Option;
