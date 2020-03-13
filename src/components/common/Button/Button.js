import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ children, className,  ...restProps }) => (
  <button 
  className={classNames(className, 'button')}
  {...restProps}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default Button;
