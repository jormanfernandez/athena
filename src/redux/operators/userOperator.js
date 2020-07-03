import { userActions } from "redux/reducersAndActions/userReducer";

let userOperator = null;
/**
 * Get the operator being used to update the store
 * @param {function} dispatch dispatch function used in the store to modified data with the reducers
 */
export const getUserOperator = (dispatch) => {
    if (!userOperator) userOperator = new UserOperator(dispatch);
    return { userOperator};
}

/**
 * Class that holds the functions and modifies the data
 */
class UserOperator {
  constructor(dispatch) {
    this.dispatch = dispatch;
  }

  setName = name => {
    this.dispatch(userActions.setUsername(name));
  }
}
