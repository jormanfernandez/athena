/**
 * Initial data for the reducer
 */
const invoicesDraft = {
  error: undefined,
  invoices: [],
  currentInvoice: undefined,
  isNew: false,
  statusList: []
}

/**
 * Reducer of the state
 * @param {object} state Redux state to be modified in a no mutation way
 * @param {object} action  {type: string, ...} It contains mostly two fields. Type, which indicates the action to be done, and the payload which will be the data modified in the store
 */
const invoicesReducer = (state = invoicesDraft, action) => {
  switch(action.type) {
    case "SET_ERROR":
      return { ...state, error: action.error}
    case "SET_INVOICES":
        return { ...state, invoices: action.invoices}
    case "SET_CURRENT_INVOICE":
        return { ...state, currentInvoice: action.currentInvoice}
    case "SET_IS_NEW":
        return { ...state, isNew: action.isNew}
    case "SET_INVOICES_STATUS_LIST":
        return { ...state, statusList: action.statusList}
    default:
      return {...state}
  }
}

/**
 * Actions to be executed when dispatch is called. This ones are received in the reducer function to update the store state
 */
const invoicesActions = {
  setError: (error) => ({
    type: "SET_ERROR",
    error
  }),
  setInvoices: (invoices) => ({
    type: "SET_INVOICES",
    invoices
  }),
  setCurrentInvoice: (currentInvoice) => ({
    type: "SET_CURRENT_INVOICE",
    currentInvoice
  }),
  setIsNew: (isNew) => ({
    type: "SET_IS_NEW",
    isNew
  }),
  setInvoicesStatus: (statusList) => ({
    type: "SET_INVOICES_STATUS_LIST",
    statusList
  }),
}

export {
  invoicesReducer,
  invoicesActions
}
      