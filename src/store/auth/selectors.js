const getErrorMessage = (state) => state.auth.errorMessage;
const getEmail = (state) => state.auth.profile.email;
const getIsLoggedIn = (state) => state.auth.isLoggedIn;

export const authSelectors = {
  getErrorMessage,
  getEmail,
  getIsLoggedIn,
};
