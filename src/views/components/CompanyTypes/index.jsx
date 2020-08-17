import React, { useState } from "react";
import { textHelper } from "util/textHelper";
import { organizationStoreView } from "redux/storeViews/organizationStoreView";
import { getOrganizationOperator } from "redux/operators/organizationOperator";
import { combineStoreViews, useStoreSelector } from "redux/util/storeHelpers";
import { useOperator } from "redux/util/useOperator";

import { If } from "views/components/If";
import { ErrorMessage } from "views/components/ErrorMessage";
import { CompanyTypesForm } from "views/components/CompanyTypes/CompanyTypesForm";
import { CompanyTypesList } from "views/components/CompanyTypes/CompanyTypesList";

export const CompanyTypes = () => {
  const organizationOperator = useOrganizationOperator();
  const { companyTypes, error } = useStoreSelector(companyTypeSelector);
  const [ companyType, setCompanyType ] = useState(undefined);
  const removeCompanyType = (form) => {
    setCompanyType(undefined);
    if (!form)
      return;

    for (const key in form.getState().modified) {
      form.change(key, undefined);
    }
  };

  return (
    <div className="container">
      <p>{textHelper("content", "companyTypes", "title")}</p>
      <If Conditions={[companyTypes.length > 0]} Else={<></>}>
        {() => <CompanyTypesList companyTypes={companyTypes} onChoose={setCompanyType}/>}
      </If>
      {error && <ErrorMessage error={error}/>}
      <CompanyTypesForm removeCompanyType={removeCompanyType} operator={organizationOperator} companyType={companyType}/>
    </div>
  );
}

const companyTypeSelector = combineStoreViews({
  companyTypes: store => organizationStoreView.getCompanyTypes(store),
  error: store => organizationStoreView.getError(store, "companyTypes") 
});

const useOrganizationOperator = () => {
  const organizationOperator = useOperator(getOrganizationOperator);
  return organizationOperator;
};
