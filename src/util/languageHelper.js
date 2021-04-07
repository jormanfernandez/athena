import { siteDetails } from "util/site";
import { basePath } from "routes/paths";
import spanish from "languages/spanish.json";

export const getLanguage = () => {
  switch(basePath) {
    default:
      return {...spanish};
  }
}
  
export const getAvailableLanguages = () => ({
  "es": "Español",
});
  
export const onChangeLanguage = ({target: { value }}) => {
  const { originAddress } = siteDetails();
  let uri = window.location.href;
  uri = uri.replace(originAddress, "").split("/").slice(2).join("/");
  window.location.href = `${originAddress}/${value}/${uri}`;
}
