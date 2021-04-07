import { CONFIG } from "appConfig";
import { userAbstractor as dUserAbstractor } from "services/dynamic/userDynamicAbstractor";
import { userAbstractor as sUserAbstractor} from "services/static/userStaticAbstractor";

export const userAbstractor = CONFIG.static ? sUserAbstractor : dUserAbstractor;
