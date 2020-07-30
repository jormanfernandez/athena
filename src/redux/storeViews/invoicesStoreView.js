/**
 * This receives the state from the store and reads from the proper reducer the data that should be read
 */
export const invoicesStoreView = {
  getError: ({ invoices }) => invoices.error,
  getInvoices: ({ invoices }) => invoices.invoices,
  getCurrentInvoice: ({ invoices }) => invoices.currentInvoice,
  getIsNew: ({ invoices }) => invoices.isNew,
  getStatusList: ({ invoices }) => invoices.statusList,
}
