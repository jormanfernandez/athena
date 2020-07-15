const detectPath = () => {
  const uri = window.location.href;
  const origin = window.location.origin;
  const base = uri.replace(origin, "").split("/")[1];

  switch(base) {
    case "es":
      return `/${base}`;
    default:
      window.location.href = `${window.location.origin}/es`
      return undefined;
  }
}

export const basePath = detectPath();