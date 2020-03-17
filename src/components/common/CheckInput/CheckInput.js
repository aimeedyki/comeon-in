import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './CheckInput.scss';

const CheckInput = ({
  checked,
  className,
  id,
  label,
  onInputChange,
  ...restProps
}) => (
    <label
      htmlFor={id}
      className={classNames(className, 'check-input')}
    >
      <input
        className="checkbox"
        checked={checked}
        id={id}
        name="isGoing"
        onChange={onInputChange}
        type="checkbox"
        {...restProps}
      />
      {label}
    </label>
  );

CheckInput.propTypes = {
  checked: PropTypes.bool.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired
};

export default CheckInput;
