import { combineReducers } from "redux";
import { userReducer } from "redux/reducersAndActions/userReducer";

export const combinedReducers = combineReducers({
  user: userReducer
})
