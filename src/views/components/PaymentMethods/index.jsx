import React, { useState } from "react";
import { organizationStoreView } from "redux/storeViews/organizationStoreView";
import { getOrganizationOperator } from "redux/operators/organizationOperator";
import { combineStoreViews, useStoreSelector } from "redux/util/storeHelpers";
import { useOperator } from "redux/util/useOperator";

import { If } from "views/components/If";
import { ErrorMessage } from "views/components/ErrorMessage";
import { PaymentMethodsForm } from "views/components/PaymentMethods/PaymentMethodsForm";
import { PaymentMethodsList } from "views/components/PaymentMethods/PaymentMethodsList";

export const PaymentMethods = () => {
  const organizationOperator = useOrganizationOperator();
  const { paymentMethods, error } = useStoreSelector(paymentMethodSelector);
  const [ paymentMethod, setPaymentMethod ] = useState(undefined);
  const removePaymentMethod = (form) => {
    setPaymentMethod(undefined);
    if (!form)
      return;

    for (const key in form.getState().modified) {
      form.change(key, undefined);
    }
  };

  return (
    <div className="container">
      <If Conditions={[paymentMethods.length > 0]} Else={<></>}>
        {() => <PaymentMethodsList paymentMethods={paymentMethods} onChoose={setPaymentMethod}/>}
      </If>
      {error && <ErrorMessage error={error}/>}
      <PaymentMethodsForm removePaymentMethod={removePaymentMethod} operator={organizationOperator} paymentMethod={paymentMethod}/>
    </div>
  );
}

const paymentMethodSelector = combineStoreViews({
  paymentMethods: store => organizationStoreView.getPaymentMethods(store),
  error: store => organizationStoreView.getError(store, "paymentMethods") 
});

const useOrganizationOperator = () => {
  const organizationOperator = useOperator(getOrganizationOperator);
  return organizationOperator;
};
