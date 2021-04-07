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
  },
  "localName": {
    "minLength": 3,
    "maxLength": 79,
    "required": true,
  },
  "localAddress": {
    "minLength": 3,
    "maxLength": 250,
    "required": true,
  },
  "companyTypeDescription": {
    "minLength": 3,
    "maxLength": 50,
    "required": true,
  },
  "paymentMethodDescription": {
    "minLength": 3,
    "maxLength": 50,
    "required": true,
  },
  "logoImage": {
    "required": true
  }
}

export const validationMessages = {
  "username": textHelper("content", "formValidations", "username"),
  "password": textHelper("content", "formValidations", "password"),
  "localName": textHelper("content", "formValidations", "localName"),
  "localAddress": textHelper("content", "formValidations", "localAddress"),
  "companyTypeDescription": textHelper("content", "formValidations", "companyTypeDescription"),
  "paymentMethodDescription": textHelper("content", "formValidations", "paymentMethodDescription"),
  "logoImage": textHelper("content", "formValidations", "logoImage"),
}
