import { textHelper } from "util/textHelper";

export const getMessage = message => (textHelper("content", "errorCodes", message) || textHelper("content", "errorCodes", "UNKNOW"));
