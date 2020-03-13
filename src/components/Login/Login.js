import React from 'react';

import { Button, Card, TextField } from '../common';

import './Login.scss';

const Login = () => {

  return (
    <Card>
      <div className="login">
        <h1 className="co-logo">comeon in</h1>
        <form className="login__form">
          <TextField
            error="Username or password incorrect"
            id="username"
            label="Username"
            onChange={() => { console.log('i changed username') }}
            type="text"
          />
          <TextField
            id="password"
            label="Password"
            onChange={() => { console.log('i changed password') }}
            type="password"
          />
          <Button type="submit">Login</Button>
        </form>
      </div>
    </Card>
  )
}

export default Login;
