import React from "react";

import Login from './Login';
import { AuthenticationContextProvider } from '../context/AuthenticationContext';

import './App.scss';

const App = () =>
  <div className="app">
    <div className="app__wrapper">
      <AuthenticationContextProvider>
        <Login />
      </AuthenticationContextProvider>
    </div>
  </div>;

export default App;
