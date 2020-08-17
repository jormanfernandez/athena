import React from "react";
import { FormErrorField } from "views/components/FormErrorField";

export const FormField = React.memo(({input, meta, ...props}) => (
  <div className="row">
    <div className="col s12">
      <div className="input-field">
        <input {...input} {...props}/>
        {<FormErrorField input={input} meta={meta}/>}
      </div>
    </div>
  </div>
));
