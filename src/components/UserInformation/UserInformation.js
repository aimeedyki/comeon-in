import React, { useContext, useState } from 'react';

import { Button, Card, CheckInput, Loader, TextField } from '../common';
import { userDetailsValidator } from '../../helpers';

import { updateUser } from '../../API';
import { AuthenticationContext } from '../../context/AuthenticationContext';


import './UserInformation.scss';

const UserInformation = () => {
  const {
    setNotificationError,
    setUser,
    user
  } = useContext(AuthenticationContext);
  const [state, setState] = useState({
    email: '',
    countryCode: '',
    mobileNumber: ''
  });
  const [errorMessages, setErrorMessages] = useState({
    email: '',
    countryCode: '',
    mobileNumber: ''
  });
  const [loading, setLoading] = useState(false);
  const [acceptMarketing, setAcceptMarketing] = useState(true);

  const handleChange = e => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  const handleCheck = () => {
    setAcceptMarketing(!acceptMarketing);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { isValid, error } = userDetailsValidator(state);

    if (isValid) {
      setLoading(true);
      setErrorMessages({
        email: '',
        countryCode: '',
        mobileNumber: ''
      });

      const { email, countryCode, mobileNumber } = state;
      const phone = `${countryCode.substr(1)}-${mobileNumber}`;
      const { id, username, password } = user;

      updateUser({
        id,
        username,
        password,
        email,
        phone,
        acceptMarketing
      }).then(response => {
        const userResponse = response.data.response;

        setUser(userResponse);
        setLoading(false);
      })
        .catch(error => {
          setNotificationError(error);
          setLoading(false);
        });
    } else {
      setErrorMessages(error);
    }
  };

  return (
    <Card>
      <div className="user-information">
        <h5 className="user-information__heading">Share your details</h5>
        <img
          className="user-information__icon"
          src="https://res.cloudinary.com/ddxsazo2k/image/upload/v1584176810/icon_bsk4iz.svg"
          alt="user icon"
        />
        <form
          className="user-information__form"
          onSubmit={handleSubmit}>
          <TextField
            error={errorMessages.email}
            id="email"
            label="Email"
            name="email"
            onChange={handleChange}
            placeholder="e.g. player@yma.com"
            type="email"
            value={state.email}
          />
          <div className="user-information__form__mobile">
            <TextField
              className="user-information__form__mobile__contry-code"
              error={errorMessages.countryCode}
              id="countrycode"
              inputMode="numeric"
              label="Country Code"
              name="countryCode"
              onChange={handleChange}
              placeholder="e.g. +47"
              type="text"
              value={state.countryCode}
            />
            <TextField
              className="user-information__form__mobile__number"
              error={errorMessages.mobileNumber}
              id="mobile"
              inputMode="numeric"
              label="Mobile Number"
              name="mobileNumber"
              onChange={handleChange}
              placeholder="e.g. 123456789"
              type="text"
              value={state.mobileNumber}
            />
          </div>
          <CheckInput
            checked={!acceptMarketing}
            label="I do not want to receive electronic marketing material"
            onInputChange={handleCheck}
          />
          <Loader show={loading}>
            <Button type="submit">
              Continue
            </Button>
          </Loader>
        </form>
      </div>
    </Card>
  );
};

export default UserInformation;

