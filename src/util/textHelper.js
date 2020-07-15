import spanish from "languages/spanish.json";
import { basePath } from "routes/paths";

const getLanguage = () => {
  switch(basePath) {
    default:
      return {...spanish};
  }
}

export const textHelper = (...args) => {
  let text = getLanguage();
  args.forEach(key => text = text?.[key]);
  return text;
}