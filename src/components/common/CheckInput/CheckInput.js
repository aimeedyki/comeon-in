import React from 'react';
import PropTypes from 'prop-types';

import './CheckInput.scss';

const CheckedInput = ({checked, label, onInputChange, ...restProps}) => (
  <label className="check-input">
    <input
      className="checkbox"
      name="isGoing"
      type="checkbox"
      checked={checked}
      onChange={onInputChange}
      {...restProps}
    />
    {label}
  </label>
);

CheckedInput.propTypes = {
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired
};

export default CheckedInput;
