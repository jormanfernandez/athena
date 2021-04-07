import React from "react";
import { textHelper } from "util/textHelper";

export const CompanyTypesItem = ({ companyType, onChoose }) => (
  <li className="collection-item">
      <p>
        {companyType.description}
        <br/>
        {textHelper("content", "companyTypes", companyType.active ? "companyTypeActive" : "companyTypeInactive")}
        <br/>
        <input 
          className="waves-effect waves-light btn" 
          type="button" 
          onClick={() => onChoose(companyType)} 
          value={textHelper("content", "companyTypes", "button", "modify")}
        />
      </p>
  </li>
);