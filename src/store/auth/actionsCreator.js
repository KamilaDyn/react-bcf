import { Types } from "./actionsType";
import { closeLoginForm } from "../login";
import {
  formatError,
  addUser,
  loginRequest,
  saveTokenInLocalStorage,
} from "./services";
const bcrypt = require("bcryptjs");

export const singupUser = (user, history) => {
  return async (dispatch) => {
    await addUser(user)
      .then((response) => {
        if (response.data.user) {
          saveTokenInLocalStorage(response.data);
          dispatch(singupUserSuccess(response.data));
          history.push("/");
        }
      })
      .catch((error) => {
        const errorMessage = formatError(error.response.data);
        dispatch(signupFailed(errorMessage));
      });
  };
};

export function signupFailed(message) {
  return {
    type: Types.ADD_USER_FAIL,
    payload: message,
  };
}
export const singupUserSuccess = (user) => {
  return { type: Types.ADD_USER, payload: { user } };
};

export const loginUser = (email, password, history) => {
  return async (dispatch) => {
    await loginRequest()
      .then((response) => {
        const users = response.data;
        const user = users.find((user) => user.email === email);
        const userPassword = bcrypt.compareSync(password, user.password);
        if (user && userPassword) {
          saveTokenInLocalStorage(user);
          dispatch(loginSuccess(user.email, user.password));
          setTimeout(() => {
            dispatch(closeLoginForm());
            history.push("/");
          }, 500);
        } else {
          dispatch(loginFailedAction("Niepoprawny mail lub hasło"));
        }
      })

      .catch((error) => {
        console.log(error);
        const errorMessage = formatError(error.response.data);
        dispatch(loginFailedAction(errorMessage));
      });
  };
};

export const loginSuccess = (email, password) => {
  return { type: Types.SUCCESS_LOGIN, payload: { email, password } };
};

export const loginFailedAction = (message) => ({
  type: Types.LOGIN_FAIL,
  payload: message,
});

export const logoutUser = () => {
  localStorage.removeItem("currentUser");
  return {
    type: Types.LOGOUT_USER,
  };
};
