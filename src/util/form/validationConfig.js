import { textHelper } from "util/textHelper";

export const validationConfig = {
  "username": {
    "minLength": 3,
    "maxLength": 15,
    "required": true,
  },
  "password": {
    "password": true,
    "required": true,
    "minLength": 8
  }
}

export const validationMessages = {
  "username": textHelper("content", "formValidations", "username"),
  "password": textHelper("content", "formValidations", "password")
}
