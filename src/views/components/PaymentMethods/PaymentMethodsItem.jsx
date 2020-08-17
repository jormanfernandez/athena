import React from "react";
import { textHelper } from "util/textHelper";

export const PaymentMethodsItem = ({ paymentMethod, onChoose }) => (
  <li className="collection-item">
      <p>
        {paymentMethod.description}
        <br/>
        {textHelper("content", "paymentMethods", paymentMethod.active ? "paymentMethodActive" : "paymentMethodInactive")}
        <br/>
        <input 
          className="waves-effect waves-light btn" 
          type="button" 
          onClick={() => onChoose(paymentMethod)} 
          value={textHelper("content", "paymentMethods", "button", "modify")}
        />
      </p>
  </li>
);