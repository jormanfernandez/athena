import React from "react";
import { CompanyTypesItem } from "views/components/CompanyTypes/CompanyTypesItem";

export const CompanyTypesList = ({ companyTypes, onChoose }) => !companyTypes ? <></> : (
  <ul className="collection">
    {companyTypes.map(companyType => <CompanyTypesItem key={companyType.id} onChoose={onChoose} companyType={companyType}/>)}
  </ul>
);