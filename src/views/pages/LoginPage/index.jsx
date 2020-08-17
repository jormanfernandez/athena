import React from "react";
import { Form, Field } from "react-final-form";
import { FormField } from "views/components/FormField";
import { validateField } from "util/form/formValidator";
import { onFormSubmit } from "util/form/onFormSubmit";
import { useOperator } from "redux/util/useOperator";
import { getUserOperator } from "redux/operators/userOperator";
import { combineStoreViews, useStoreSelector } from "redux/util/storeHelpers";
import { userStoreView } from "redux/storeViews/userStoreView";
import { Header } from "views/components/Header";
import { Footer } from "views/components/Footer";
import { ErrorMessage } from "views/components/ErrorMessage";
import { Loading } from "views/components/Loading";
import { textHelper } from "util/textHelper";

import "./_style.scss";

export const LoginPage = () => (
  <>
    <Header/>
    <LoginForm/>
    <Footer/>
  </>
);

/**
 * Login Form using React Final Form and React-Redux Hook to get data from the store
 * It also uses operators to mutate this same data when the form is sent
 * @returns {JSX.Element} It returns a functional component
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
                <FormField
                  input={input}
                  meta={meta}
                  type="text" 
                  placeholder={textHelper("content", "login", "input", "username")} 
                  disabled={submitting}
                />
              )}
            </Field>
            <Field 
              name="password"
              validate={validateField("password")}
              >
              {({ input, meta }) => (
                <FormField
                  input={input}
                  meta={meta}
                  type="password" 
                  placeholder={textHelper("content", "login", "input", "password")} 
                  disabled={submitting}
                />
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
});

const useUserOperator = () => {
  const userOperator = useOperator(getUserOperator);
  return onFormSubmit(userOperator.login);
};
