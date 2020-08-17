import React, { useState } from "react";
import { textHelper } from "util/textHelper";
import { organizationStoreView } from "redux/storeViews/organizationStoreView";
import { getOrganizationOperator } from "redux/operators/organizationOperator";
import { combineStoreViews, useStoreSelector } from "redux/util/storeHelpers";
import { useOperator } from "redux/util/useOperator";

import { If } from "views/components/If";
import { ErrorMessage } from "views/components/ErrorMessage";
import { LogosForm } from "views/components/Logos/LogosForm";
import { LogoList } from "views/components/Logos/LogoList";

export const Logos = () => {
  const organizationOperator = useOrganizationOperator();
  const { logos, error } = useStoreSelector(logosSelector);
  const [ logo, setLogo ] = useState(undefined);
  const removeLogo = (form) => {
    setLogo(undefined);
    if (!form)
      return;
    
    for (const key in form.getState().modified) {
      form.change(key, undefined);
    }
  };

  return (
    <div className="container">
      <p>{textHelper("content", "logos", "title")}</p>
      <If Conditions={[logos.length > 0]} Else={<></>}>
        {() => <LogoList logos={logos} onChoose={setLogo}/>}
      </If>
      {error && <ErrorMessage error={error}/>}
      <LogosForm removeLogo={removeLogo} operator={organizationOperator} logo={logo}/>
    </div>
  );
}

const logosSelector = combineStoreViews({
  logos: store => organizationStoreView.getLogos(store),
  error: store => organizationStoreView.getError(store, "logos") 
});

const useOrganizationOperator = () => {
  const organizationOperator = useOperator(getOrganizationOperator);
  return organizationOperator;
};
