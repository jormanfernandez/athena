const requiredValidator = (value, isRequired) => {
  return !isRequired || (value ?? "").toString().length > 0;
}

const notWhiteSpaceSearchValidator = (value, isRequired) => {
  return !isRequired || (value ?? "").toString().trim().length > 2;
}

const notWhiteSpaceValidator = (value) => {
  return /^[A-Za-z0-9$@#%^$<>.,!%*?&\-_~`()+={}[\]|:;"'/]*$/.test(value);
}

const hasValueValidator = (value, constant) => {
  return value === constant;
}

const regexValidator = (value, regex) => {
  return regex.test(value);
}

const emailValidator = (value) => {
  return /^(\s*)([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)(\s*)$/.test(
    value
  );
}

const minLengthValidator = (value, minLength) => {
  return (value ?? "").length >= minLength;
}

const maxLengthValidator = (value, maxLength) => {
  return (value ?? "").length <= maxLength;
}

const lengthValidator = (value, length) => {
  return (value ?? "").length === length;
}

const numberValidator = (value) => {
  return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
}

const phoneValidator = (value) => {
  // (ddd) ddd-dddd or ddd-ddd-dddd]
  if (!/^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})[- ]?[2-9]\d{2}-?\d{4}$/.test(value)) {
    return false;
  }

  const numbersOnly = value.replace(/\D/g, "");
  return !(
    /^(\d)\1\1\1\1\1\1\1\1\1$/gi.test(numbersOnly) ||
    "0123456789012345678".indexOf(value) > -1 ||
    "9876543210987654321".indexOf(numbersOnly) > -1
  );
}

const nameValidator = (value) => {
  return /^[a-zA-Z áéíóúÁÉÍÓÚäëïöüÄËÏÖÜñÑ]*$/.test(value);
}

const passwordValidator = (value) => {
  return /^(?=.*[A-Z])(?=.*\d)(?=.*[$@#%^$<>.,!%*?&\-_~`()+={}[\]|:;"'/])[A-Za-z\d$@#%^$<>.,!%*?&\-_~`()+={}[\]|:;"'/]+$/g.test(
    value
  );
}

export const validationMethods = {
  required: requiredValidator,
  notWhiteSpace: notWhiteSpaceValidator,
  notWhiteSpaceSearch: notWhiteSpaceSearchValidator,
  hasValue: hasValueValidator,
  regexValidator: regexValidator,
  email: emailValidator,
  minLength: minLengthValidator,
  maxLength: maxLengthValidator,
  exactLength: lengthValidator,
  number: numberValidator,
  phone: phoneValidator,
  name: nameValidator,
  password: passwordValidator,
};
