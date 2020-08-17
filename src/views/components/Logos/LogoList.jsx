import React from "react";
import { LogoItem } from "views/components/Logos/LogoItem";

export const LogoList = ({ logos, onChoose }) => !logos ? <></> : (
  <ul className="collection">
    {logos.map(logo => <LogoItem key={logo.id} onChoose={onChoose} logo={logo}/>)}
  </ul>
);