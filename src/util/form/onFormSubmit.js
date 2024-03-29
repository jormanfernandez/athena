import { FORM_ERROR } from "final-form";
import { sleep } from "util/sleep";

export const onFormSubmit = operatorMethod => {
  return async values => {
    try {
      const TIME_CHECK = 100;
      const msBefore = +(new Date());
      await operatorMethod(values);
      const msAfter = +(new Date());
      if ((msAfter - msBefore) < TIME_CHECK) {
        await sleep(TIME_CHECK);
      }
      return undefined;
    } catch (e) {
      const { "general_error": generalErrorMessage, ...errorMessagesToPass } = e.errorsMap;
      errorMessagesToPass[FORM_ERROR] = generalErrorMessage;
      return errorMessagesToPass;
    }
  };
}
