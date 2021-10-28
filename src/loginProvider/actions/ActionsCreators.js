import { Types } from "./actionsType";
import { saveTokenInLocalStorage } from "../services/auth.service";
import { login, formatError } from "../services/auth.service";

export const loginUser = (user) => {
  return (dispatch) => {
    login(user)
      .then((response) => {
        const errorMessage = formatError(response);
        if (errorMessage) {
          dispatch(loginFailedAction(errorMessage));
        }
        if (response.user) {
          saveTokenInLocalStorage(response);
          dispatch(loginSuccess(response.user));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const loginSuccess = (user) => {
  return { type: Types.SUCCESS_LOGIN, payload: { user } };
};

export const loginFailedAction = (data) => ({
  type: Types.LOGIN_FAIL,
  payload: { data, isLoggedIn: false },
});

export const logoutUser = () => {
  localStorage.removeItem("currentUser");
  return {
    type: Types.LOGOUT_USER,
  };
};

export const openLoginForm = () => {
  return { type: Types.OPEN_LOGIN_FORM };
};
export const closeLoginForm = () => {
  return { type: Types.CLOSE_LOGIN_FORM };
};
