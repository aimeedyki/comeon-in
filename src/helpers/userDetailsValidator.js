import validator from 'validator';

const userDetailsValidator = (formDetails) => {
  const error = {};

  if (!validator.isEmail(formDetails.email)) {
    error.email = 'Please provide a valid email';
  }

  if (!(/^(\+)([1-9]{1,3})$/).test(formDetails.countryCode)) {
    error.countryCode = 'e.g +47';
  }

  if (
    !validator.isNumeric(formDetails.mobileNumber,{no_symbols: true}) ||
    !validator.isLength(formDetails.mobileNumber, { min: 9 })
    ) {
    error.mobileNumber = 'must not be less then 9 digits';
  }

  if (Object.keys(error).length !== 0) {
    return {
      error,
      isValid: false,
    };
  }

  return { isValid: true };
};

export default userDetailsValidator;
