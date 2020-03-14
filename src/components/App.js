import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import Navbar from './Navbar';
import Login from './Login';
import TermsAndConditions from './TermsAndConditions';
import UserInformation from './UserInformation';
import Welcome from './Welcome';

import { AuthenticationContextProvider } from '../context/AuthenticationContext';
import ProtectedRoute from './ProtectedRoute';

import './App.scss';

const App = () => (
  <div className="app">
    <div className="app__wrapper">
      <AuthenticationContextProvider>
        <Switch>
          <ProtectedRoute path="/welcome">
            <Navbar />
            <Welcome />
          </ProtectedRoute>
          <ProtectedRoute path="/terms">
            <Navbar />
            <TermsAndConditions />
          </ProtectedRoute>
          <ProtectedRoute path="/details">
            <Navbar />
            <UserInformation />
          </ProtectedRoute>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </AuthenticationContextProvider>
    </div>
  </div>
);

export default App;
