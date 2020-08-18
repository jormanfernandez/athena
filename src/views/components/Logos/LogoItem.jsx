import React from "react";
import { textHelper } from "util/textHelper";

export const LogoItem = ({ logo }) => (
  <li className="collection-item">
    <figure>
      <img alt={textHelper("content", "logos", "alt")} src={logo.rawData}/>
    </figure>
    <p>
      <br/>
      {textHelper("content", "logos", logo.active ? "logoActive" : "logoInactive")}
      <br/>
    </p>
  </li>
);
