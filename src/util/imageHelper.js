/**
 * Reads a file input and pass it as base64 to the callback
 * @param {File} file 
 * @param {function} callback
 */
export const createBase64ImageFromFile = (file, callback = () => {}) => {
  const reader = new FileReader();
  const contentType = file.type;
  if (contentType && contentType.indexOf("image") === -1) {
    return;
  }

  reader.addEventListener("load", (event) => {
    callback(event.target.result);
  });

  reader.readAsDataURL(file);
}

/**
 * Creates the base64 src for the img
 * @param {object} source {contentType: {string}, data: {string}}
 */
export const createRawImageDataFromSource = source => {
  let base64 = `data:${source.contentType};base64,${source.data}`;
  return base64;
}
