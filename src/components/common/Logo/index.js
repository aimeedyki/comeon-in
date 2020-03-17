import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Logo.scss';

const Logo = ({ className }) => (
  <h1
    className={classNames(
      className,
      'logo',
    )}
  >
    Comeon in
  </h1>
);

Logo.propTypes = {
  className: PropTypes.string
};

export default Logo;
