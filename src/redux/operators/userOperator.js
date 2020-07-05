import { userActions } from "redux/reducersAndActions/userReducer";

let userOperator = null;
/**
 * Get the operator being used to update the store
 * @param {object} store Store object with the redux data
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
    this.store.dispatch(userActions.setUsername(name));
  }
}
