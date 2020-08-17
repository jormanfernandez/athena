import React from "react";
import { Switch, Route } from "react-router-dom";
import { useOnMount } from "routes/useOnMount";
import { PAGES, getRoute } from "routes/pages";
import { useSetHistory } from "routes/history";
import { LoginPage } from "views/pages/LoginPage";
import { AdminOrganization } from "views/pages/AdminOrganization";
import { StyleguidePage } from "views/pages/Styleguide";
import { NotFound } from "views/pages/NotFound";

export const Root = () => {
  useSetHistory();
  useOnMount();
  return (
    <Switch>
      <Route {...getRoute(PAGES.login)}>
        <LoginPage/>
      </Route>
      <Route {...getRoute(PAGES.adminOrganization)}>
        <AdminOrganization/>
      </Route>
      <Route {...getRoute(PAGES.styleguide)}>
        <StyleguidePage/>
      </Route>
      <Route>
        <NotFound/>
      </Route>
    </Switch>
  );
}
