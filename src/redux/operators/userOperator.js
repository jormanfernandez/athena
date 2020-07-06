import { userActions } from "redux/reducersAndActions/userReducer";
import { userStoreView } from "redux/storeViews/userStoreView";

let userOperator = null;
/**
 * Get the operator being used to update the store
 * @param {object} dispatch Dispatch function to redux
 */
export const getUserOperator = (store) => {
    if (!userOperator) userOperator = new UserOperator(store);
    return userOperator;
}

/**
 * Class that holds the functions and modifies the data
 */
class UserOperator {
  constructor(store) {
    this.store = store;
  }

  setName = name => {
    if (!name) {
      return false;
    }
    /** STUB: Shows how to read data outside components */
    const loggedName = userStoreView.username(this.store.getState());
    console.log(loggedName);
    this.store.dispatch(userActions.setUsername(name));
  }
}
