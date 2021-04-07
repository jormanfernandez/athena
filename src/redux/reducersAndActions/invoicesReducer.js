import { contain } from "redux/util/contain";

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
const invoicesReducer = contain((invoicesDraft, action) => {
  // eslint-disable-next-line default-case
  switch(action.type) {
    case "SET_INVOICE_ERROR":
      invoicesDraft.error = action.error;
      break;
    case "SET_INVOICES":
      invoicesDraft.invoices = action.invoices;
      break;
    case "SET_CURRENT_INVOICE":
      invoicesDraft.currentInvoice = action.currentInvoice;
      break;
    case "SET_IS_NEW":
      invoicesDraft.isNew = action.isNew;
      break;
    case "SET_INVOICES_STATUS_LIST":
      invoicesDraft.statusList = action.statusList;
      break;
  }
}, invoicesDraft);

/**
 * Actions to be executed when dispatch is called. This ones are received in the reducer function to update the store state
 */
const invoicesActions = {
  setError: (error) => ({
    type: "SET_INVOICE_ERROR",
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
      