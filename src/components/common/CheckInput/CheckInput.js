import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './CheckInput.scss';

const CheckInput = ({
  checked,
  className,
  label,
  onInputChange,
  ...restProps
}) => (
    <label className={classNames(className, 'check-input')}>
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

CheckInput.propTypes = {
  checked: PropTypes.bool.isRequired,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired
};

export default CheckInput;
