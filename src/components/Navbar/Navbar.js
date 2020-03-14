import React from 'react';
import { Link } from "react-router-dom";
import { BackButton, Logo } from '../common';

import './Navbar.scss';

const Navbar = () => (
  <nav className="navbar">
    <BackButton />
    <Logo variant='dark' />
    <Link className="navbar__logout" to="/">
      Log out
    </Link>
  </nav>
);

export default Navbar;
