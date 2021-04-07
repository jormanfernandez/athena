/**
 * This receives the state from the store and reads from the proper reducer the data that should be read
 */
export const organizationStoreView = {
  getError: ({ organization }, where) => organization.error[where],
  getLocals: ({ organization }) => organization.locals,
  getLogos: ({ organization }) => organization.logos,
  getActiveLogo: ({ organization }) => organization.logos.filter(logo => logo.active)[0],
  getCompanyTypes: ({ organization }) => organization.companyTypes,
  getPaymentMethods: ({ organization }) => organization.paymentMethods,
}
