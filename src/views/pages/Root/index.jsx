import React from "react";
import { Switch, Route } from "react-router-dom";
import { PAGES } from "routes/pages";
import { LoginPage } from "views/pages/LoginPage";

export const Root = () => (
  <Switch>
    <Route {...PAGES.login}>
      <LoginPage/>
    </Route>
  </Switch>
);
