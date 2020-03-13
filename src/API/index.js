import client from './client';

export const authenticate = async (username, password) => {
  const data = await client.post(
    '/authenticate',
    { username, password }
  );

  return data;
};
