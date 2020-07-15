import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { basePath } from "routes/paths";
import { store } from "redux/store";
import { Root } from "views/pages/Root";

import "scss/_pages.scss";

export const App = () => (
  <Provider store={store}>
    <Router basename={basePath}>
      <Root/>
    </Router>
  </Provider>
);
