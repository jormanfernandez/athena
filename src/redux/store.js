import { createStore } from "redux";
import { combinedReducers } from "redux/reducersAndActions/combinedReducers";

const store = createStore(combinedReducers);

export {
  store
}
