const ITEMS = {
  IS_AUTHENTICATED: 'isAuthenticated',
  AUTHENTICATED_USER: 'user'
};

const checkIfAuthenticated = () => {
  try {
    return localStorage.getItem(ITEMS.IS_AUTHENTICATED) === 'true';
  } catch (error) {
    return;
  }
};

const markUserAsAuthenticated = () => {
  try {
    localStorage.setItem(ITEMS.IS_AUTHENTICATED, 'true');
  } catch (error) {
    return;
  }
};

const saveAuthenticatedUser = user => {
  try {
    localStorage.setItem(ITEMS.AUTHENTICATED_USER, JSON.stringify(user));
  } catch (error) {
    return;
  }
};

const restoreAuthenticatedSession = () => {
  try {
    const isAuthenticated = checkIfAuthenticated();
    const user = JSON.parse(localStorage.getItem(ITEMS.AUTHENTICATED_USER));

    return { isAuthenticated, user };
  } catch (error) {
    return;
  }
};

const removeUser = () => {
  try {
    localStorage.removeItem(ITEMS.IS_AUTHENTICATED);
    localStorage.removeItem(ITEMS.AUTHENTICATED_USER);
  } catch (error) {
    return;
  }
};

export {
  markUserAsAuthenticated,
  saveAuthenticatedUser,
  removeUser,
  restoreAuthenticatedSession
};
