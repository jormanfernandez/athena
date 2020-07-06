import React from "react";
import { Switch, Route } from "react-router-dom";
import { PAGES, getRoute, onMounted } from "routes/pages";
import { LoginPage } from "views/pages/LoginPage";
import { StyleguidePage } from "views/pages/Styleguide";

export const Root = () => (
  <Switch>
    <Route {...getRoute(PAGES.login)}>
      {onMounted(PAGES.login)}
      <LoginPage/>
    </Route>
    <Route {...getRoute(PAGES.styleguide)}>
      {onMounted(PAGES.styleguide)}
      <StyleguidePage/>
    </Route>
  </Switch>
);
