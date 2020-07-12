import { validationConfig, validationMessages } from "util/form/validationConfig";
import { validationMethods } from "util/form/validationMethods";

const runValidations = (value, validations, messages) => {
  let result = true;
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
    let error = true;

    if (!validationConfig[field]) {
      return error;
    }
    const isValid = runValidations(value, validationConfig[field], validationMessages[field]);
    if (isValid !== true) {
      error = isValid;
    }

    return error;
  }
}

export const showErrorField = (input, meta) => input.value && meta.error && meta.touched;
