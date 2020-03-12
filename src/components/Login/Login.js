import React from 'react';

import TextField from '../common/TextField';

import './Login.scss';

const Login = () => {

  return (
    <div className="login">
      <h1 className="co-logo">Comeon In</h1>
      <form className="login__form">
        <TextField
          label="Username"
          id="username"
          onChange={()=>{console.log('i changed username')}}
          error="Username or password incorrect"
        />
        <TextField
          label="Password"
          id="password"
          onChange={()=>{console.log('i changed password')}}
        />
      </form>
    </div>
  )
}

export default Login;
