import React, { useContext, useState } from 'react';

import { Button, Card, Loader, Logo, TextField } from '../common';
import { authenticate } from '../../API';
import { AuthenticationContext } from '../../context/AuthenticationContext';
import { authenticationValidator } from '../../helpers';

import './Login.scss';

const Login = () => {
  const { setAuthenticationStatus, setUser } = useContext(AuthenticationContext);
  const [state, setState] = useState({ username: '', password: '' });
  const [errorMessages, setErrorMessages] = useState({ username: '', password: '' });
  const [serverError, setServerError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { isValid, error } = authenticationValidator(state);

    if (isValid) {
      setLoading(true);
      setAuthenticationStatus(false);
      setServerError('');
      setErrorMessages({
        username: '',
        password: ''
      });

      authenticate(state.username, state.password)
        .then(response => {
          setAuthenticationStatus(true);
          setUser(response);
          setLoading(false);
        })
        .catch(error => {
          setServerError(error);
          setLoading(false);
        });
    } else {
      setErrorMessages(error);
    }
  };

  return (
    <Card>
      <div className="login">
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
          <TextField
            error={errorMessages.password}
            id="password"
            label="Password"
            name="password"
            onChange={handleChange}
            type="password"
            value={state.password}
          />
          {serverError &&
            <p className="login__form__error-text">
              {serverError}
            </p>}
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
