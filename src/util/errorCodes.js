import { textHelper } from "util/textHelper";

export const getError = message => textHelper("content", "errorCodes", message) || textHelper("content", "errorCodes", "UNKNOW");
