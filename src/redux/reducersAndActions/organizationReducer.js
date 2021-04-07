import { contain } from "redux/util/contain";

/**
 * Initial data for the reducer
 */
const organizationDraft = {
  error: {},
  locals: [],
  companyTypes: [],
  paymentMethods: [],
  activeLogo: undefined,
  logos: []
}

/**
 * Reducer of the state
 * @param {object} state Redux state to be modified in a no mutation way
 * @param {object} action  {type: string, ...} It contains mostly two fields. Type, which indicates the action to be done, and the payload which will be the data modified in the store
 */
const organizationReducer = contain((organizationDraft, action) => {
  // eslint-disable-next-line default-case
  switch(action.type) {
    case "SET_GENERAL_ERROR":
      organizationDraft.error.general = action.error;
      break;
    case "SET_LOCALS_ERROR":
      organizationDraft.error.locals = action.error;
      break;
    case "SET_COMPANY_TYPES_ERROR":
      organizationDraft.error.companyTypes = action.error;
      break;
    case "SET_PAYMENT_METHODS_ERROR":
      organizationDraft.error.paymentMethods = action.error;
      break;
    case "SET_LOGOS_ERROR":
      organizationDraft.error.logos = action.error;
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
    case "SET_ACTIVE_LOGO":
      organizationDraft.activeLogo = action.activeLogo;
      break;
    case "SET_LOGOS":
      organizationDraft.logos = action.logos;
      break;
  }
}, organizationDraft);

/**
 * Actions to be executed when dispatch is called. This ones are received in the reducer function to update the store state
 */
const organizationActions = {
  setGeneralError: (error) => ({
    type: "SET_GENERAL_ERROR",
    error
  }),
  setLocalsError: (error) => ({
    type: "SET_LOCALS_ERROR",
    error
  }),
  setCompanyTypesError: (error) => ({
    type: "SET_COMPANY_TYPES_ERROR",
    error
  }),
  setPaymentMethodsError: (error) => ({
    type: "SET_PAYMENT_METHODS_ERROR",
    error
  }),
  setLogosError: (error) => ({
    type: "SET_LOGOS_ERROR",
    error
  }),
  setLocals: (locals) => ({
    type: "SET_LOCALS",
    locals
  }),
  setCompanyTypes: (companyTypes) => ({
    type: "SET_COMPANY_TYPES",
    companyTypes
  }),
  setPaymentMethods: (paymentMethods) => ({
    type: "SET_PAYMENT_METHODS",
    paymentMethods
  }),
  setActiveLogo: (activeLogo) => ({
    type: "SET_ACTIVE_LOGO",
    activeLogo
  }),
  setLogos: (logos) => ({
    type: "SET_LOGOS",
    logos
  })
}

export {
  organizationReducer,
  organizationActions
}
  