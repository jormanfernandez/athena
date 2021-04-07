import React from "react";
import { FormErrorField } from "views/components/FormErrorField";
import { textHelper } from "util/textHelper";

export const FormFieldCheckbox = React.memo(({input, meta, ...props}) => (
  <div className="row">
    <div className="col s6 m3 switch">
      {props.title && <p>{props.title}</p>}
      <label>
        {props?.offText ||  textHelper("content", "lever", "off")}
        <input type="checkbox" {...input} {...props}/>
        <span className="lever"></span>
        {props?.onText || textHelper("content", "lever", "on")}
      </label>
      <FormErrorField input={input} meta={meta}/>
    </div>
  </div>
));
