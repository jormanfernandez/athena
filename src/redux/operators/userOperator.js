import { userAbstractor } from "services/userAbstractor";
import { userActions } from "redux/reducersAndActions/userReducer";
import { getMessage } from "util/errorCodes";

let userOperator = null;
/**
 * Get the operator being used to update the store
 * @param {object} store Store object from redux
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

  login = async ({username, password}) => {
    if (!username || !password) {
      this.store.dispatch(userActions.setError(getMessage("UE01")));
      return;
    }
    this.store.dispatch(userActions.setError(undefined));
    try {
      const { success, errorCode, user} = await userAbstractor.authenticate(username, password);
      if (!success) {
        this.store.dispatch(userActions.setError(getMessage(errorCode)));
        return;
      }

      this.store.dispatch([
        userActions.setUsername(user.username),
        userActions.setSubscriptions(user.details.subscriptions),
        userActions.setName(`${user.details.name} ${user.details.lastname}`),
        userActions.setIsLoggedIn(true)
      ]);
      // FIXME: Apply redirection to dashboard
    } catch (err) {
      console.log(`REQUEST ABSTRACTOR ERROR ${err}`);
      this.store.dispatch(userActions.setError(getMessage()));
    }
  }
}
