import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AuthenticationContext = React.createContext(null);

export const AuthenticationContextProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticationStatus] = useState(false);
  const [user, setUser] = useState({});

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
}
