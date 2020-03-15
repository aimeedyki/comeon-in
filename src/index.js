import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter
} from "react-router-dom";

import App from './components/App';
import {
  AuthenticationContextProvider
} from './context/AuthenticationContext';

ReactDOM.render(
  <BrowserRouter>
    <AuthenticationContextProvider>
      <App />
    </AuthenticationContextProvider>
  </BrowserRouter>,
  document.querySelector("#root")
);
