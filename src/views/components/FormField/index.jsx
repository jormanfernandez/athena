import React from "react";
import { FormErrorField } from "views/components/FormErrorField";

export const FormField = React.memo(({input, meta, ...props}) => (
  <div>
    <input {...input} {...props}/>
    {<FormErrorField input={input} meta={meta}/>}
  </div>
));
