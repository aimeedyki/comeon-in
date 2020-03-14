import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Logo.scss';

const Logo = ({ className, variant='light' }) => (
  <h1
    className={classNames(
      className,
      'logo',
      `logo--${variant}`
    )}
  >
    Comeon in
  </h1>
);

Logo.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string
};

export default Logo;
