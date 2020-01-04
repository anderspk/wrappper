import React from "react";
import Option from "../option/option";
import Icon from "../../assets/icons";
import { FILE, EDIT, IMAGE } from "../../constants/ICONS";
import "./giftBuilder.scss";

const GiftBuilder = () => (
  <div className="gift-builder">
    <div className="left">
      <Option icon={<Icon name={FILE} />}>
        <h4>Add File</h4>
        <span>- PDF of tickets to a concert, etc</span>
      </Option>
      <Option icon={<Icon name={EDIT} />}>
        <h4>Add Note</h4>
        <span>- Description of what the gift is</span>
      </Option>
      <Option icon={<Icon name={IMAGE} />}>
        <h4>Add Image</h4>
        <span>- Image of what the gift is, like concert tickets</span>
      </Option>
    </div>
    <div className="right">
      <img
        src="https://media.giphy.com/media/3oz8xBkRsgPTnbK1GM/giphy.gif"
        alt=""
      />
    </div>
  </div>
);

export default GiftBuilder;
