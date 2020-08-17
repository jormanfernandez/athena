import React from "react";
import { textHelper } from "util/textHelper";

export const LogoItem = ({ logo, onChoose }) => (
  <li className="collection-item">
    <figure>
      <img alt={textHelper("content", "logos", "alt")} src={logo.rawData}/>
    </figure>
    <p>
      <br/>
      {textHelper("content", "logos", logo.active ? "logoActive" : "logoInactive")}
      <br/>
      <input 
        className="waves-effect waves-light btn" 
        type="button" 
        onClick={() => onChoose(logo)} 
        value={textHelper("content", "logos", "button", "modify")}
      />
    </p>
  </li>
);
