import React from "react";
import { useOperator } from "redux/util/useOperator";
import { Form, Field } from "react-final-form";
import { onFormSubmit } from "util/form/onFormSubmit";
import { getUserOperator } from "redux/operators/userOperator";
import { combineStoreViews, useStoreSelector } from "redux/util/storeHelpers";
import { userStoreView } from "redux/storeViews/userStoreView";
import { Header } from "views/components/Header";
import { Footer } from "views/components/Footer";
import { ErrorMessage } from "views/components/ErrorMessage";
import { ErrorFieldMessage } from "views/components/ErrorFieldMessage";
import { Loading } from "views/components/Loading";
import { validateField } from "util/form/formValidator";
import { textHelper } from "util/textHelper";

import "./_style.scss";

/**
 * Component to be connected with redux. The name works as an identifier of the redux component
 * @returns {jsx} It returns a React Component in JSX format
 */
export const LoginPage = () => (
  <>
    <Header/>
    <LoginForm/>
    <Footer/>
  </>
);

/**
 * Content summary that can be included in the redux component
 * @returns {jsx} It returns a functional component
 */
const LoginForm = () => {
  const { error } = useStoreSelector(userSelector);
  const userOperator = useUserOperator();
  return (
    <main className="wrapper container login-form">
      {error && <ErrorMessage error={error}/>}
      <Form
        onSubmit={userOperator}
        render={({ handleSubmit, submitting, pristine, invalid }) => (
          <form onSubmit={handleSubmit}>
            <Field 
              name="username"
              validate={validateField("username")}
              >
              {({ input, meta }) => (
                <div>
                  <input {...input} type="text" placeholder={textHelper("content", "login", "input", "username")} disabled={submitting}/>
                  {<ErrorFieldMessage input={input} meta={meta}/>}
                </div>
              )}
            </Field>
            <Field 
              name="password"
              validate={validateField("password")}
              >
              {({ input, meta }) => (
                <div>
                  <input {...input} type="password" placeholder={textHelper("content", "login", "input", "password")} disabled={submitting}/>
                  {<ErrorFieldMessage input={input} meta={meta}/>}
                </div>
              )}
            </Field>
            <br/>
            
            {submitting ? <Loading center={true}/> : (
              <button 
                disabled={submitting || pristine || invalid}
                className="btn waves-effect waves-light" 
                type="submit"
              >
                {textHelper("content", "login", "button", "submit")}
              </button>
            )}
          </form>
        )}
      />
    </main>
  )
}

const userSelector = combineStoreViews({
  error: store => userStoreView.getError(store)
})

const useUserOperator = () => {
  const userOperator = useOperator(getUserOperator);
  return onFormSubmit(userOperator.login);
};
