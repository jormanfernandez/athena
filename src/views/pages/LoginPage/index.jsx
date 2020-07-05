import React, { useState } from "react";
import { connect } from "react-redux";
import { userStoreView } from "redux/storeViews/userStoreView";
import { combineStoreViews } from "redux/util/combineStoreViews";
import { useOperator } from "redux/util/useOperator";
import { getUserOperator } from "redux/operators/userOperator";
import { Wait } from "views/components/Wait/Wait";

/**
 * Component to be connected with redux. The name works as an identifier of the redux component
 * @param {object} props {store, operators} Props that are consistent 
 *                        with the state to props and dispatch on props
 * @returns {React.Component} It returns a React Component in JSX format
 */
function RDXComponent ({store: { username }}) {
  return (
    <Wait waitFor={[username]} fallback={<UserLogin/>}>
      {() => (
        <div>
            Buenas, {username}.
        </div>
      )}
    </Wait>
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

const storeSelectors = combineStoreViews({
  username: (store) => userStoreView.username(store)
});

const useUserOperator = () => {
  const userOperator = useOperator(getUserOperator);
  return userOperator;
};

/**
 * Returns the main component connected to the redux store with the state and dispatch on the props.
 */
export const LoginPage = connect(storeSelectors)(RDXComponent);
