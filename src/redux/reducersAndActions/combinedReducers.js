import { combineReducers } from "redux";
import { clientsReducer } from "redux/reducersAndActions/clientsReducer";
import { invoicesReducer } from "redux/reducersAndActions/invoicesReducer";
import { organizationReducer } from "redux/reducersAndActions/organizationReducer";
import { productsReducer } from "redux/reducersAndActions/productsReducer";
import { siteReducer } from "redux/reducersAndActions/siteReducer";
import { userReducer } from "redux/reducersAndActions/userReducer";

export const combinedReducers = combineReducers({
  clients: clientsReducer,
  invoices: invoicesReducer,
  organization: organizationReducer,
  products: productsReducer,
  site: siteReducer,
  user: userReducer,
});
