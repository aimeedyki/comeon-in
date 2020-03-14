import client from './client';

export const authenticate = async (username, password) => {
  const data = await client.post(
    '/authenticate',
    { username, password }
  );

  return data;
};

export const updateUser = async (params) => {
  const data = await client.put(
  '/player',
    params
  );

  return data;
};
