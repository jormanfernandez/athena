import React, { useState } from "react";
import { textHelper } from "util/textHelper";
import { organizationStoreView } from "redux/storeViews/organizationStoreView";
import { getOrganizationOperator } from "redux/operators/organizationOperator";
import { combineStoreViews, useStoreSelector } from "redux/util/storeHelpers";
import { useOperator } from "redux/util/useOperator";

import { If } from "views/components/If";
import { ErrorMessage } from "views/components/ErrorMessage";
import { LocalsForm } from "views/components/Locals/LocalForm";
import { LocalList } from "views/components/Locals/LocalList";

export const Locals = () => {
  const organizationOperator = useOrganizationOperator();
  const { locals, error } = useStoreSelector(localsSelector);
  const [ local, setLocal ] = useState(undefined);
  const removeLocal = (form) => {
    setLocal(undefined);
    if (!form)
      return;
    
    for (const key in form.getState().modified) {
      form.change(key, undefined);
    }
  };

  return (
    <div className="container">
      <p>{textHelper("content", "locals", "title")}</p>
      <If Conditions={[locals.length > 0]} Else={<></>}>
        {() => <LocalList locals={locals} onChoose={setLocal}/>}
      </If>
      {error && <ErrorMessage error={error}/>}
      <LocalsForm removeLocal={removeLocal} operator={organizationOperator} local={local}/>
    </div>
  );
}

const localsSelector = combineStoreViews({
  locals: store => organizationStoreView.getLocals(store),
  error: store => organizationStoreView.getError(store, "locals") 
});

const useOrganizationOperator = () => {
  const organizationOperator = useOperator(getOrganizationOperator);
  return organizationOperator;
};
