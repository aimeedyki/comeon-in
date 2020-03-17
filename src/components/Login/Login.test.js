import React from "react";
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';

import Login from "./Login";
import {
  AuthenticationContext,
  AuthenticationContextProvider
} from '../../context/AuthenticationContext';
import {
  noUser,
  userOnDetailsScreen,
} from '../../__mocks__/userMocks';
import { authenticate } from '../../API';

jest.mock('../../API');
afterEach(cleanup);

describe('Login Component', () => {
  const renderLogin = () => {
    return render(
      <AuthenticationContextProvider
        value={AuthenticationContext}
      >
        <Login />
      </AuthenticationContextProvider>
    );
  };

  test('renders Login component', () => {
    const { getByTestId } = renderLogin();

    expect(getByTestId('login')).toBeInTheDocument();
  });

  test('displays errors if there are no user inputs', () => {
    const { getByText, queryByText } = renderLogin();

    expect(queryByText('username is required')).not.toBeInTheDocument();
    expect(queryByText('password is required')).not.toBeInTheDocument();

    fireEvent.click(getByText('Login'));

    expect(queryByText('username is required')).toBeInTheDocument();
    expect(queryByText('password is required')).toBeInTheDocument();
  });

  test('authenticates user if the login details are correct', async () => {
    const { username, password } = userOnDetailsScreen;
    const { getByLabelText, getByText, queryByTestId } = renderLogin(noUser);
    const results = { data: { response: userOnDetailsScreen } };
    authenticate.mockResolvedValueOnce(results);

    expect(queryByTestId('loader')).toBeNull();

    fireEvent.change(getByLabelText('Username'), {
      target: { value: username }
    });
    fireEvent.change(getByLabelText('Password'), {
      target: { value: password }
    });

    expect(getByLabelText('Username').value).toBe('harish.kulur');

    fireEvent.click(getByText('Login'));

    expect(queryByTestId('loader')).toBeTruthy();

    await waitFor(() => {
      expect(getByLabelText('Username').value).toBe('');
    });
  });

  test('displays error if the login details are wrong', async () => {
    const { getByLabelText, getByText, queryByTestId, queryByText } = renderLogin(noUser);
    authenticate.mockRejectedValueOnce('Invalid username and password');

    expect(queryByTestId('loader')).toBeNull();

    fireEvent.change(getByLabelText('Username'), {
      target: { value: 'harish.kulur' }
    });
    fireEvent.change(getByLabelText('Password'), {
      target: { value: 'incorrect' }
    });

    expect(getByLabelText('Username').value).toBe('harish.kulur');
    expect(queryByText('Invalid username and password')).not.toBeInTheDocument;

    fireEvent.click(getByText('Login'));

    expect(queryByTestId('loader')).toBeTruthy();

    await waitFor(() => {
      expect(queryByText('Invalid username and password')).toBeInTheDocument;
    });
  });
});
