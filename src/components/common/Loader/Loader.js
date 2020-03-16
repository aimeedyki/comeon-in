import React from 'react';
import PropTypes from 'prop-types';

import './Loader.scss';

const Loader = ({ children, show }) => show ?
  (<div className="loader">
    <div className="loader__spinner"></div>
  </div>) : 
  <>{children}</>;

Loader.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
};

export default Loader;


