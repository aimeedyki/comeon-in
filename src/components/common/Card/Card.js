import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Card.scss';

const Card = ({ children, className }) => (
  <div className={classNames('card', className)}>
      {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default Card;
