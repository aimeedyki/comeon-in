import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, waitFor, cleanup } from '@testing-library/react';

import App from './App';
import { AuthenticationContext } from '../context/AuthenticationContext';
import {
  noUser,
  userOnDetailsScreen,
  userOnWelcomeScreen,
  userOnTermsScreen
} from '../__mocks__/userMocks';

afterEach(cleanup);

describe('App Component', () => {
  const renderApp = (user, isAuthenticated) => {
    return render(
      <AuthenticationContext.Provider
        value={{ user, isAuthenticated }}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthenticationContext.Provider>
    );
  };

  test('renders App component with Loader while waiting for lazy components',
    () => {
      const { getByTestId } = renderApp(noUser, false);

      expect(getByTestId('app')).toBeInTheDocument();
      expect(getByTestId('loader')).toBeInTheDocument();
    });

  test('renders Login component when there is no user', async () => {
    const { getByTestId } = renderApp(noUser, false);
    const lazyLogin = await waitFor(() => getByTestId('login'));

    expect(lazyLogin).toBeInTheDocument();
  });

  test('renders UserInformation component when the user is in the sharing information stage',
    async () => {
      const { getByTestId } = renderApp(userOnDetailsScreen, true);
      const lazyUserInformation = await waitFor(() => getByTestId('user-information'));

      expect(lazyUserInformation).toBeInTheDocument();
    });

  test('renders TermsAndCondition component when the user is in the terms stage',
    async () => {
      const { getByTestId } = renderApp(userOnTermsScreen, true);
      const lazyTermsAndCondition = await waitFor(() => getByTestId('terms'));

      expect(lazyTermsAndCondition).toBeInTheDocument();
    });

  test('renders Welcome component when the user has passed all stages',
    async () => {
      const { getByTestId } = renderApp(userOnWelcomeScreen, true);
      const lazyWelcome = await waitFor(() => getByTestId('welcome'));

      expect(lazyWelcome).toBeInTheDocument();
    });
});
