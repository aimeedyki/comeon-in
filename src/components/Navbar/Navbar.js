import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import { BackButton, Logo } from '../common';
import { logoutUser } from '../../API';
import { AuthenticationContext } from '../../context/AuthenticationContext';

import './Navbar.scss';

const Navbar = () => {
  const { setAuthenticationStatus, user } = useContext(AuthenticationContext);

  const handleLogout = () => {
    logoutUser(user)
      .then(response => {
        if (response.data.status === 'SUCCESS') {
          setAuthenticationStatus(false);
        }
      })
      .catch(() => { });
  };

  return (
    <nav className="navbar">
      <BackButton />
      <Logo variant='dark' />
      <Link
        className="navbar__logout" 
        to="/"
        onClick={handleLogout}
      >
        Log out
    </Link>
    </nav>
  );
};

export default Navbar;
