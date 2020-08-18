import { logError } from "redux/util/logError";
import { getError } from "util/errorCodes";
import { organizationActions } from "redux/reducersAndActions/organizationReducer";
import { organizationAbstractor } from "services/organizationAbstractor";
import { createBase64ImageFromFile } from "util/imageHelper";

let organizationOperator = null;
/**
 * Get the operator being used to update the store
 * @param {object} store Store object from redux
 */
export const getOrganizationOperator = (store) => {
  if (!organizationOperator) organizationOperator = new OrganizationOperator(store);
  return organizationOperator;
}

/**
 * Class that holds the functions and modifies the data
 */
class OrganizationOperator {
  constructor(store) {
    this.store = store;
  }

  setLogoOnForm = files => {
    const file = files[0];
    if (!file) {
      return;
    }
    createBase64ImageFromFile(files[0], image => this.logoOnForm = image);
  }

  saveLogo = async (fields) => {
    const image = this.logoOnForm;
    const { active } = fields;
    this.store.dispatch(organizationActions.setLogosError(undefined));

    if (active === undefined || !image) {
      this.store.dispatch(organizationActions.setLogosError(getError()));
      return;
    } 

    try {
      // FIXME: Create abstractor method
      const { success, errorCode, logos } = await organizationAbstractor.saveLogo(image, active);
      if (!success) {
        this.store.dispatch(organizationActions.setLogosError(getError(errorCode)));
        return;
      }
      this.logoOnForm = undefined;
      this.store.dispatch(organizationActions.setLogos(logos));
    } catch (e) {
      logError(this.store, "OrganizationOperator.saveLogo: promise error", e);
    }
  }

  saveCompanyType = async (fields) => {
    this.store.dispatch(organizationActions.setCompanyTypesError(undefined));
    try {
      // FIXME: Create abstractor method
      const { success, errorCode, companyTypes } = await organizationAbstractor.saveCompanyType(fields);
      if (!success) {
        this.store.dispatch(organizationActions.setCompanyTypesError(getError(errorCode)));
        return;
      }

      this.store.dispatch(organizationActions.setCompanyTypes(companyTypes));
    } catch (e) {
      logError(this.store, "OrganizationOperator.saveCompanyType: promise error", e);
    }
  }

  savePaymentMethod = async (fields) => {
    this.store.dispatch(organizationActions.setPaymentMethodsError(undefined));
    try {
      // FIXME: Create abstractor method
      const { success, errorCode, paymentMethods } = await organizationAbstractor.savePaymentMethod(fields);
      if (!success) {
        this.store.dispatch(organizationActions.setPaymentMethodsError(getError(errorCode)));
        return;
      }

      this.store.dispatch(organizationActions.setPaymentMethods(paymentMethods));
    } catch (e) {
      logError(this.store, "OrganizationOperator.savePaymentMethod: promise error", e);
    }
  }

  saveLocal = async (fields) => {
    this.store.dispatch(organizationActions.setLocalsError(undefined));
    try {
      // FIXME: Create abstractor method
      const { success, errorCode, locals } = await organizationAbstractor.saveLocal(fields);
      if (!success) {
        this.store.dispatch(organizationActions.setLocalsError(getError(errorCode)));
        return;
      }

      this.store.dispatch(organizationActions.setLocals(locals));
    } catch (e) {
      logError(this.store, "OrganizationOperator.saveLocal: promise error", e);
    }
  }

  getOrganizationInfo = async () => {
    this.store.dispatch(organizationActions.setGeneralError(undefined));
    try {
      const { success, errorCode, data } = await organizationAbstractor.getOrganizationInfo();
      if (!success) {
        this.store.dispatch(organizationActions.setGeneralError(getError(errorCode)));
        return;
      }

      const { locals, paymentMethods, companyTypes, logos, activeLogo } = data;

      this.store.dispatch([
        organizationActions.setActiveLogo(activeLogo),
        organizationActions.setLocals(locals),
        organizationActions.setLogos(logos),
        organizationActions.setPaymentMethods(paymentMethods),
        organizationActions.setCompanyTypes(companyTypes)
      ]);
      
    } catch (e) {
      logError(this.store, "OrganizationOperator.getOrganizationInfo: promise error", e);
    }
  }
}
