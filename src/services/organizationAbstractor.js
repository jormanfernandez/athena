import { CONFIG } from "appConfig";
import { organizationAbstractor as dOrganizationAbstractor } from "services/dynamic/organizationDynamicAbstractor";
import { organizationAbstractor as sOrganizationAbstractor} from "services/static/organizationStaticAbstractor";

export const organizationAbstractor = CONFIG.static ? sOrganizationAbstractor : dOrganizationAbstractor;
