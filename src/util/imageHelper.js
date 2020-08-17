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