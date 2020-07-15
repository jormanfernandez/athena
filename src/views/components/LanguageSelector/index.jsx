import React from "react";
import { basePath } from "routes/paths";
import { getAvailableLanguages, onChangeLanguage } from "util/languageHelper";

export const LanguageSelector = () => {
  const availableLanguages = getAvailableLanguages();
  const keys = Object.keys(availableLanguages);
  return keys.length > 1 && (
    <div className="input-field col s12 left">
      <select value={basePath} onChange={onChangeLanguage}>
      {keys.map((key, idx) => (<option value={key} key={idx}>{availableLanguages[key]}</option>))}
      </select>
    </div>
  )
}
