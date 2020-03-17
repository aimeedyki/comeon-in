import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import { Logo } from '../common';
import { logoutUser } from '../../API';
import { AuthenticationContext } from '../../context/AuthenticationContext';

import './Navbar.scss';

const Navbar = () => {
  const {
    setNotificationError,
    setAuthenticationStatus,
    user
  } = useContext(AuthenticationContext);

  const handleLogout = () => {
    logoutUser(user)
      .then(response => {
        if (response.data.status === 'SUCCESS') {
          setAuthenticationStatus(false);
        }
      })
      .catch(error => {
        setNotificationError(error);

        if (error === 'Username do not match!') {
          setAuthenticationStatus(false);
        }
      });
  };

  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <Logo className="navbar__logo" variant='dark' />
        <Link
          className="navbar__logout"
          to="/"
          onClick={handleLogout}
        >
          Log out
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
