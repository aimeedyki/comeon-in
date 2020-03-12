import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './TextField.scss'

const TextField = ({
  className,
  error,
  id,
  label,
  onChange,
  placeholder,
  type,
  value,
  ...restProps
}) => (
    <label
      htmlFor={id}
      className={classNames(
        className,
        'text-field',
        { 'text-field--error': error }
      )}
    >
      <span className="text-field__label">{label}</span>
      <span className=" text-field__input-wrapper">
        <input
          className="text-field__input"
          id={id}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          value={value}
          {...restProps}
        />
        <span className="text-field__border" />
      </span>
      <span
        className={classNames({
          'text-field__error-description': error
        })}
      >
        {error}
      </span>
    </label>
  );

TextField.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default TextField;
