import React, { useState } from "react";
import { FormErrorField } from "views/components/FormErrorField";
import { textHelper } from "util/textHelper";
import { If } from "views/components/If";

// FIXME: Style a little bit better the File Input on forms
export const FormFileField = React.memo(({input, meta, setFile, ...props}) => {
  const [fileName, setFileName] = useState(undefined);
  const onChange = ({ target: { files }}) => {
    setFile(files);
    setFileName(files[0].name);
  };
  return (
    <div className="row">
      <div className="col s12">
        <div className="input-field">
          <label>
            <span className="btn waves-effect waves-light">{textHelper("content", "button", "file")}</span>
            <If Conditions={[!!fileName]} Else={<></>}>
              {() => (
              <span className="file-field">
                <i className="material-icons">attachment</i>
                {fileName}
              </span>
            )}
            </If>
            <input {...input} {...props} onChange={onChange} className="hide"/>
          </label>
          <br/>
          {<FormErrorField input={input} meta={meta}/>}
        </div>
      </div>
    </div>
  )
});
