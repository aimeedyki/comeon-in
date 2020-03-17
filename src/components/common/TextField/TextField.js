import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './TextField.scss';

const TextField = ({
  className,
  error,
  id,
  inputIcon,
  label,
  onChange,
  onInputIconClick,
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
        {inputIcon && (
          <img
            src={inputIcon}
            alt="input icon"
            className="text-field__input-icon"
            onClick={onInputIconClick}
          />
        )}
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
  inputIcon: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onInputIconClick: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default TextField;
