import React from "react";
import "./noteOption.scss";

const NoteOption = () => (
  <div className="note-option">
    <label htmlFor="note-input" className="gift-note">
      <h4>Add a note</h4>
      <textarea put id="note-input" type="text" />
    </label>
  </div>
);

export default NoteOption;
