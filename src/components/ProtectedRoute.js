import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { AuthenticationContext } from '../context/AuthenticationContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <Route
      render={() =>
        isAuthenticated ?
          children :
          (<Redirect to="/" />)
      }
    />
  );
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired
};

export default ProtectedRoute;
