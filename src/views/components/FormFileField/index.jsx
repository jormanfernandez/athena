import React from "react";
import { FormErrorField } from "views/components/FormErrorField";

// FIXME: Style a little bit better the File Input on forms
export const FormFileField = React.memo(({input, meta, setFile, ...props}) => {
  const onChange = ({ target: { files }}) => setFile(files);
  return (
    <div className="row">
      <div className="col s12">
        <div className="input-field">
          <input {...input} {...props} onChange={onChange}/>
          {<FormErrorField input={input} meta={meta}/>}
        </div>
      </div>
    </div>
  )
});
