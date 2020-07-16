import { siteDetails } from "util/site";

const detectBasePath = () => {
  const { originAddress, defaultLanguage } = siteDetails();
  const uri = window.location.href;
  const base = uri.replace(originAddress, "").split("/")[1];

  switch(base) {
    case "es":
      return `/${base}`;
    default:
      window.location.href = `${originAddress}/${defaultLanguage}`
      return undefined;
  }
}

export const basePath = detectBasePath();
