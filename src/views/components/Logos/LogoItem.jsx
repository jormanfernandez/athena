import React from "react";
import { textHelper } from "util/textHelper";

export const LogoItem = ({ logo, onChangeStatus = () => {} }) => (
  <li className="collection-item">
    <figure>
      <img alt={textHelper("content", "logos", "alt")} src={logo.rawData}/>
    </figure>
    <p>
      <br/>
      {textHelper("content", "logos", logo.active ? "logoActive" : "logoInactive")}
      <br/>
      <button className="btn waves-effect waves-light" onClick={() => onChangeStatus(logo)}>
        {textHelper("content", "button", !logo.active ? "activate" : "inactivate")}
      </button>
    </p>
  </li>
);
