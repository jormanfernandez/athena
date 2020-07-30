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
const organizationReducer = (state = organizationDraft, action) => {
  switch(action.type) {
    case "SET_ERROR":
      return { ...state, error: action.error}
    case "SET_LOCALS":
        return { ...state, locals: action.locals}
    case "SET_COMPANY_TYPES":
        return { ...state, companyTypes: action.companyTypes}
    case "SET_PAYMENT_METHODS":
        return { ...state, paymentMethods: action.paymentMethods}
    default:
      return {...state}
  }
}

/**
 * Actions to be executed when dispatch is called. This ones are received in the reducer function to update the store state
 */
const organizationActions = {
  setError: (error) => ({
    type: "SET_ERROR",
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
  