import { FORM_ERROR } from "final-form";

// FIXME: Why the forms after a second submit is not returning to its initial state?
export const onFormSubmit = operatorMethod => {
  return async values => {
    try { 
      await operatorMethod(values);
      return undefined;
    } catch (e) {
      const { "general_error": generalErrorMessage, ...errorMessagesToPass } = e.errorsMap;
      errorMessagesToPass[FORM_ERROR] = generalErrorMessage;
      return errorMessagesToPass;
    }
  };
}
