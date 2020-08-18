import React from "react";
import { LogoItem } from "views/components/Logos/LogoItem";

export const LogoList = ({ logos }) => !logos ? <></> : (
  <ul className="collection">
    {logos.map(logo => <LogoItem key={logo.id} logo={logo}/>)}
  </ul>
);