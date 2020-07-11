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
import { Loading } from "views/components/Loading";
import { validateField, showErrorField } from "util/form/formValidator";

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
                  <input {...input} type="text" placeholder="Usuario" disabled={submitting}/>
                  {showErrorField(input, meta) && <ErrorMessage error={meta.error}/>}
                </div>
              )}
            </Field>
            <Field 
              name="password"
              validate={validateField("password")}
              >
              {({ input, meta }) => (
                <div>
                  <input {...input} type="password" placeholder="Contraseña" disabled={submitting}/>
                  {showErrorField(input, meta) && <ErrorMessage error={meta.error}/>}
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
                Ingresar
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
