import { FORM_ERROR } from "final-form";

export const onFormSubmit = (operatorMethod, successCallback = () => {}) => {
  return values => {
    return operatorMethod(values).then(successValue => {
      successCallback(successValue);
      return undefined;
    }).catch(error => {
      const { "general_error": generalErrorMessage, ...errorMessagesToPass } = error.errorsMap;
      errorMessagesToPass[FORM_ERROR] = generalErrorMessage;
      return errorMessagesToPass;
    })
  };
}