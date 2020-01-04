import React from "react";
import "./newGift.scss";
import GiftBuilder from "../../components/giftBuilder/giftBuilder";
import Icon from "../../assets/icons";
import { FILE } from "../../constants/ICONS";
import NoteOption from "../../components/giftOptions/noteOption/noteOption";

const NewGift = () => (
  <div className="new-gift">
    <h2>Build Your Gift</h2>
    {/* <div className="gift-options">
      <button className="gift-option">
        <Icon name={FILE} />
        <h4>Add file</h4>
        <p>PDF of tickets to a concert, etc</p>
        <span className="add">Click to add</span>
      </button>
      <NoteOption />
    </div> */}
    <GiftBuilder />
  </div>
);

export default NewGift;
