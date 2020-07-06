import React, { useState } from "react";
import { userStoreView } from "redux/storeViews/userStoreView";
import { combineStoreViews, useStoreSelector } from "redux/util/storeHelpers";
import { useOperator } from "redux/util/useOperator";
import { getUserOperator } from "redux/operators/userOperator";
import { If } from "views/components/If";

/**
 * Component to be connected with redux. The name works as an identifier of the redux component
 * @returns {jsx} It returns a React Component in JSX format
 */
export const LoginPage = () => {
  const { username } = useStoreSelector(userSelector);
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
 * @returns {jsx} It returns a functional component
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
