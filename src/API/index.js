import client from './client';

export const authenticate = (username, password) => {
  const data = client.post(
    '/authenticate',
    { username, password }
  );

  return data;
};

export const updateUser = (params) => {
  const data = client.put('/player', params);

  return data;
};

export const logoutUser = (params) => {
  const data = client.post('/logout', params);

  return data;
};
