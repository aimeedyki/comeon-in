import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  markUserAsAuthenticated,
  saveAuthenticatedUser,
  restoreAuthenticatedSession
} from '../webStorage';

export const AuthenticationContext = React.createContext(null);

export const AuthenticationContextProvider = ({ children }) => {
  const {
    isAuthenticated: initialAuthenticationStatus,
    user: initialUser
  } = restoreAuthenticatedSession();
  const [
    isAuthenticated,
    setAuthenticationStatus
  ] = useState(initialAuthenticationStatus);
  const [user, setUser] = useState(initialUser || {});

  useEffect(() => {
    if (isAuthenticated) {
      markUserAsAuthenticated();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    saveAuthenticatedUser(user);
  }, [user]);

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated,
        setAuthenticationStatus,
        setUser,
        user
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

AuthenticationContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
