import React from "react";
import { LogoItem } from "views/components/Logos/LogoItem";

export const LogoList = ({ logos, operator }) => {
  const onChangeStatus = logo => operator.changeLogoStatus(logo);
  return !logos ? <></> : (
    <ul className="collection">
      {logos.map(logo => <LogoItem key={logo.id} onChangeStatus={onChangeStatus} logo={logo}/>)}
    </ul>
  );
};