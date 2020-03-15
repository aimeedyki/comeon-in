import React, { useContext, useEffect} from "react";
import {
  Switch,
  Route,
  useHistory
} from "react-router-dom";

import Navbar from './Navbar';
import Login from './Login';
import TermsAndConditions from './TermsAndConditions';
import UserInformation from './UserInformation';
import Welcome from './Welcome';
import { AuthenticationContext } from '../context/AuthenticationContext';
import ProtectedRoute from './ProtectedRoute';
import { getRoute } from '../helpers';
import routes from '../routes';

import './App.scss';

const App = () => {
  const { isAuthenticated, user } = useContext(AuthenticationContext);
  let history = useHistory();

  useEffect(() => {
    const userRoute = getRoute(user);

    history.push(userRoute);
  }, [user]);

  return (
    <div className="app">
      <div className="app__wrapper">
        {isAuthenticated && <Navbar />}
        <Switch>
          <ProtectedRoute path={routes.welcome}>
            <Welcome />
          </ProtectedRoute>
          <ProtectedRoute path={routes.terms}>
            <TermsAndConditions />
          </ProtectedRoute>
          <ProtectedRoute path={routes.details}>
            <UserInformation />
          </ProtectedRoute>
          <Route path={routes.login}>
            <Login />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
