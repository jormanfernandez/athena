/**
 * This receives the state from the store and reads from the proper reducer the data that should be read
 */
export const organizationStoreView = {
  getError: ({ organization }) => organization.error,
  getLocals: ({ organization }) => organization.locals,
  getCompanyTypes: ({ organization }) => organization.companyTypes,
  getPaymentMethods: ({ organization }) => organization.paymentMethods,
}
