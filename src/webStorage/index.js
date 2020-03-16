const ITEMS = {
  IS_AUTHENTICATED: 'isAuthenticated',
  AUTHENTICATED_USER: 'user'
};

const checkIfAuthenticated = () =>
  localStorage.getItem(ITEMS.IS_AUTHENTICATED) === 'true';

const markUserAsAuthenticated = () => {
  localStorage.setItem(ITEMS.IS_AUTHENTICATED, 'true');
};

const saveAuthenticatedUser = user => {
  localStorage.setItem(ITEMS.AUTHENTICATED_USER, JSON.stringify(user));
};

const restoreAuthenticatedSession = () => {
  const isAuthenticated = checkIfAuthenticated();
  const user = JSON.parse(localStorage.getItem(ITEMS.AUTHENTICATED_USER));

  return { isAuthenticated, user };
};

const removeUser = () => {
  localStorage.removeItem(ITEMS.IS_AUTHENTICATED);
  localStorage.removeItem(ITEMS.AUTHENTICATED_USER);
};

export {
  markUserAsAuthenticated,
  saveAuthenticatedUser,
  removeUser,
  restoreAuthenticatedSession
};
