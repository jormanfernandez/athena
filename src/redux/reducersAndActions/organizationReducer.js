import { contain } from "redux/util/contain";

/**
 * Initial data for the reducer
 */
const organizationDraft = {
  error: undefined,
  locals: [],
  companyTypes: [],
  paymentMethods: []
}

/**
 * Reducer of the state
 * @param {object} state Redux state to be modified in a no mutation way
 * @param {object} action  {type: string, ...} It contains mostly two fields. Type, which indicates the action to be done, and the payload which will be the data modified in the store
 */
const organizationReducer = contain((organizationDraft, action) => {
  // eslint-disable-next-line default-case
  switch(action.type) {
    case "SET_ORGANIZATION_ERROR":
      organizationDraft.error = action.error;
      break;
    case "SET_LOCALS":
      organizationDraft.locals = action.locals;
      break;
    case "SET_COMPANY_TYPES":
      organizationDraft.companyTypes = action.companyTypes;
      break;
    case "SET_PAYMENT_METHODS":
      organizationDraft.paymentMethods = action.paymentMethods;
      break;
  }
}, organizationDraft);

/**
 * Actions to be executed when dispatch is called. This ones are received in the reducer function to update the store state
 */
const organizationActions = {
  setError: (error) => ({
    type: "SET_ORGANIZATION_ERROR",
    error
  }),
  setLocals: (locals) => ({
    type: "SET_LOCALS",
    locals
  }),
  setTypes: (companyTypes) => ({
    type: "SET_COMPANY_TYPES",
    companyTypes
  }),
  setPaymentMethods: (paymentMethods) => ({
    type: "SET_PAYMENT_METHODS",
    paymentMethods
  })
}

export {
  organizationReducer,
  organizationActions
}
  