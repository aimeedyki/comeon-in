const ITEMS = {
  IS_AUTHENTICATED: 'isAuthenticated',
  AUTHENTICATED_USER: 'user'
};

const checkIfAuthenticated = () =>
  sessionStorage.getItem(ITEMS.IS_AUTHENTICATED) === 'true';

const markUserAsAuthenticated = () => {
  sessionStorage.setItem(ITEMS.IS_AUTHENTICATED, 'true');
};

const saveAuthenticatedUser = user => {
  sessionStorage.setItem(ITEMS.AUTHENTICATED_USER, JSON.stringify(user));
};

const restoreAuthenticatedSession = () => {
  const isAuthenticated = checkIfAuthenticated();
  const user = JSON.parse(sessionStorage.getItem(ITEMS.AUTHENTICATED_USER));

  return { isAuthenticated, user };
};

const removeUser = () => {
  sessionStorage.removeItem(ITEMS.IS_AUTHENTICATED);
  sessionStorage.removeItem(ITEMS.AUTHENTICATED_USER);
};

export {
  markUserAsAuthenticated,
  saveAuthenticatedUser,
  removeUser,
  restoreAuthenticatedSession
};
