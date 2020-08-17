import React from "react";
import { textHelper } from "util/textHelper";

export const LocalItem = ({ local, onChoose }) => (
  <li className="collection-item">
      <span className="title">{local.name}</span>
      <p>
        {local.address}
        <br/>
        {textHelper("content", "locals", local.active ? "localActive" : "localInactive")}
        <br/>
        <input 
          className="waves-effect waves-light btn" 
          type="button" 
          onClick={() => onChoose(local)} 
          value={textHelper("content", "locals", "button", "modify")}
        />
      </p>
  </li>
);