import React from "react";
import { PaymentMethodsItem } from "views/components/PaymentMethods/PaymentMethodsItem";

export const PaymentMethodsList = ({ paymentMethods, onChoose }) => !paymentMethods ? <></> : (
  <ul className="collection">
    {paymentMethods.map(paymentMethod => <PaymentMethodsItem key={paymentMethod.id} onChoose={onChoose} paymentMethod={paymentMethod}/>)}
  </ul>
);