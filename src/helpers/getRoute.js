import routes from '../routes';

const getRoute = (user) => {
  const {
    showEmailPhoneScreen,
    showTermsAndCondition,
    showWelcomeScreen
  } = user;

  if (showEmailPhoneScreen) {
    return routes.details;
  } else if (showTermsAndCondition) {
    return routes.terms;
  } else if (showWelcomeScreen) {
    return routes.welcome;
  }
};

export default getRoute;
