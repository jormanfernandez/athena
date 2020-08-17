import { getOrganizationOperator } from "redux/operators/organizationOperator";

export const onAdminOrganizationMount = store => {
  const organizationOperator = getOrganizationOperator(store);
  organizationOperator.getOrganizationInfo();
}
