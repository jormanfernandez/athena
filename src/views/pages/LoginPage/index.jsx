import React, { useState } from "react";
import { userStoreView } from "redux/storeViews/userStoreView";
import { combineStoreViews, Selector } from "redux/util/storeHelpers";
import { useOperator } from "redux/util/useOperator";
import { getUserOperator } from "redux/operators/userOperator";
import { If } from "views/components/If";

/**
 * Component to be connected with redux. The name works as an identifier of the redux component
 * @param {object} props {store, operators} Props that are consistent 
 *                        with the state to props and dispatch on props
 * @returns {React.Component} It returns a React Component in JSX format
 */
export function LoginPage () {
  const { username } = Selector(userSelector);
  return (
    <If Conditions={[!!username]} Else={<UserLogin/>}>
      {() => (
        <div>
            Buenas, {username}.
        </div>
      )}
    </If>
  );
}

/**
 * Content summary that can be included in the redux component
 * @param {object} props This ones are the props that can be received in the Functional component.
 * @returns {React.Component} It returns a functional component
 */
const UserLogin = () => {
  const userOperator = useUserOperator();
  const [nick, setNick] = useState("");
  const useSetNick = () => {
    userOperator.setName(nick);
  }

  return (
    <>
      <input type="text" value={nick} onChange={e => setNick(e.target.value)}/>
      <input type="button" value="save" onClick={useSetNick}/>
      <hr/>
    </>
  )
}

const userSelector = combineStoreViews({
  username: (store) => userStoreView.username(store)
});

const useUserOperator = () => {
  const userOperator = useOperator(getUserOperator);
  return userOperator;
};
