import { validationConfig, validationMessages } from "util/form/validationConfig";
import { validationMethods } from "util/form/validationMethods";

const runValidations = (value, validations, messages) => {
  let result;
  for (let method in validations) {
    const condition = validations[method];
    const validate = validationMethods[method](value, condition);
    if (!validate) {
      result = messages[method];
      break;
    }
  }
  return result;
}

export const formValidator = values => {
  let errors = {};
  for (let key in values) {
    const validations = validateField(key);
    const isValid = validations(values[key]);
    if (isValid !== true) {
      errors[key] = isValid;
    }
  }
  return errors;
}

export const validateField = field => {
  return value => {
    if (!validationConfig[field]) {
      return false;
    }
    return runValidations(value, validationConfig[field], validationMessages[field]);
  }
}
