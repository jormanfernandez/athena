import { getLanguage } from "util/languageHelper";

export const textHelper = (...args) => {
  let text = getLanguage();
  args.forEach(key => text = text?.[key]);
  return text;
}
