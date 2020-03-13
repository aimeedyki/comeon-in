import validator from 'validator';

const autheticationValidator = (formDetails) => {
  const error = {};

  Object.keys(formDetails).forEach((key) => {
    if (!validator.isLength(formDetails[key], { min: 1 })) {
      error[key] = `${key} is required`;
    }
  });

  if (Object.keys(error).length !== 0) {
    return {
      error,
      isValid: false,
    };
  }

  return { isValid: true };
};

export default autheticationValidator;
