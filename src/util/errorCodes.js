import { textHelper } from "util/textHelper";

const getMessage = message => (textHelper("content", "errorCodes", message) || textHelper("content", "errorCodes", "UNKNOW"));

export {
  getMessage
}