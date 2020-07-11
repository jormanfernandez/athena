import { combineReducers } from "redux";
import { userReducer } from "redux/reducersAndActions/userReducer";
import { siteReducer } from "redux/reducersAndActions/siteReducer";

export const combinedReducers = combineReducers({
  user: userReducer,
  site: siteReducer
})
