import React from "react";
import { basePath } from "routes/paths";
import { getAvailableLanguages, onChangeLanguage } from "util/languageHelper";

export const LanguageSelector = () => {
  const availableLanguages = getAvailableLanguages();
  return (
    <div className="input-field col s12 left">
      <select value={basePath} onChange={onChangeLanguage}>
        <Option values={availableLanguages}/>
      </select>
    </div>
  )
}

const Option = ({ values }) => {
  return (
    <>
      {Object.keys(values).map((key, idx) => (<option value={key} key={idx}>{values[key]}</option>))}
    </>
  )
}