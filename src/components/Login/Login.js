import React, { useContext, useState } from 'react';

import {
  Button,
  Card,
  Loader,
  Logo,
  PasswordTextField,
  TextField
} from '../common';
import { authenticate } from '../../API';
import { AuthenticationContext } from '../../context/AuthenticationContext';
import { authenticationValidator } from '../../helpers';

import './Login.scss';

const initialState = { username: '', password: '' };

const Login = () => {
  const {
    setAuthenticationStatus,
    setNotificationError,
    setUser,
    user
  } = useContext(AuthenticationContext);
  const [state, setState] = useState(initialState);
  const [errorMessages, setErrorMessages] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    
    if (errorMessages[name]) {
      setErrorMessages({
        ...errorMessages,
        [name]: ''
      });
    }

    setState({ ...state, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { isValid, error } = authenticationValidator(state);

    if (isValid) {
      setLoading(true);
      setAuthenticationStatus(false);
      setNotificationError('');
      setErrorMessages({
        username: '',
        password: ''
      });

      authenticate(state.username, state.password)
        .then(response => {
          const userResponse = response.data.response;

          setState(initialState);
          setAuthenticationStatus(true);
          setUser({ ...user, ...userResponse });
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
      <div className="login" data-testid="login">
        <Logo />
        <form className="login__form" onSubmit={handleSubmit}>
          <TextField
            error={errorMessages.username}
            id="username"
            label="Username"
            name="username"
            onChange={handleChange}
            type="text"
            value={state.username}
          />
          <PasswordTextField
            error={errorMessages.password}
            id="password"
            label="Password"
            name="password"
            onChange={handleChange}
            value={state.password}
          />
          <Loader show={loading}>
            <Button type="submit">
              Login
            </Button>
          </Loader>
        </form>
      </div>
    </Card>
  );
};

export default Login;
