import spanish from "languages/spanish.json";
import { basePath } from "routes/paths";


export const detectLanguage = () => {
  const uri = window.location.href;
  const origin = window.location.origin;
  const base = uri.replace(origin, "").split("/")[1];

  switch(base) {
    case "es":
      return base;
    default:
      window.location.href = `${window.location.origin}${basePath}`
      return undefined;
  }
}

const getLanguage = () => {
  const language = detectLanguage();

  switch(language) {
    case "es":
    default:
      return {...spanish};
  }
}

export const textHelper = (...args) => {
  let text = getLanguage();
  args.forEach(key => text = text?.[key]);
  return text;
}