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

function requiredValidator(value, isRequired) {
  return !isRequired || (value ?? "").toString().length > 0;
}

function notWhiteSpaceSearchValidator(value, isRequired) {
  return !isRequired || (value ?? "").toString().trim().length > 2;
}

function notWhiteSpaceValidator(value) {
  return /^[A-Za-z0-9$@#%^$<>.,!%*?&\-_~`()+={}[\]|:;"'/]*$/.test(value);
}

function hasValueValidator(value, constant) {
  return value === constant;
}

function regexValidator(value, regex) {
  return regex.test(value);
}

function emailValidator(value) {
  return /^(\s*)([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)(\s*)$/.test(
    value
  );
}

function minLengthValidator(value, minLength) {
  return (value ?? "").length >= minLength;
}

function maxLengthValidator(value, maxLength) {
  return (value ?? "").length <= maxLength;
}

function lengthValidator(value, length) {
  return (value ?? "").length === length;
}

function numberValidator(value) {
  return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
}

function phoneValidator(value) {
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

function nameValidator(value) {
  return /^[a-zA-Z áéíóúÁÉÍÓÚäëïöüÄËÏÖÜñÑ]*$/.test(value);
}

function passwordValidator(value) {
  return /^(?=.*[A-Z])(?=.*\d)(?=.*[$@#%^$<>.,!%*?&\-_~`()+={}[\]|:;"'/])[A-Za-z\d$@#%^$<>.,!%*?&\-_~`()+={}[\]|:;"'/]+$/g.test(
    value
  );
}
