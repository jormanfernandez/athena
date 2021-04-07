import React, { useState } from "react";
import { FormErrorField } from "views/components/FormErrorField";
import { textHelper } from "util/textHelper";
import { If } from "views/components/If";

export const FormFileField = React.memo(({input, meta, setFile, ...props}) => {
  const [fileNames, setFileNames] = useState([]);
  const onChange = ({ target: { files }}) => {
    const names = Array.from(files).map(file => file.name);
    setFileNames(names);
    setFile(files);
  };
  return (
    <div className="row">
      <div className="col s12">
        <div className="input-field">
          <label className="file-field">
            <span className="btn waves-effect waves-light">{textHelper("content", "button", "file")}</span>
            <If Conditions={[fileNames.length > 0]} Else={<></>}>
              {() => fileNames.map((name, idx) => <FileName name={name} key={idx}/>)}
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

const FileName = ({name}) => (
  <aside>
    <span>
      <i className="material-icons">attachment</i>
      {name}
    </span>
  </aside>
);
