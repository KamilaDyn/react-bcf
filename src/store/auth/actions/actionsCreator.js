import { Types } from './actionsType';
import { login } from '../../login';
import {
  formatError,
  addUser,
  loginRequest,
  saveTokenInLocalStorage,
} from '../services';
const bcrypt = require('bcryptjs');

const singupUser = (user, history) => {
  return async (dispatch) => {
    await addUser(user)
      .then((response) => {
        if (response.data.user) {
          saveTokenInLocalStorage(response.data);
          dispatch(singupUserSuccess(response.data));
          history.push('/');
        }
      })
      .catch((error) => {
        const errorMessage = formatError(error.response.data);
        dispatch(signupFailed(errorMessage));
      });
  };
};

const signupFailed = (message) => {
  return {
    type: Types.ADD_USER_FAIL,
    payload: message,
  };
};
const singupUserSuccess = (user) => {
  return { type: Types.ADD_USER, payload: { user } };
};

const loginUser = (email, password, history) => {
  return async (dispatch) => {
    await loginRequest()
      .then((response) => {
        const users = response.data;
        const user = users.find((user) => user.email === email);
        const userPassword = bcrypt.compareSync(password, user.accessToken);
        const payloadUser = {
          firstName: user.firstName,
          secondName: user.secondName,
          email: user.email,
          accessToken: user.accessToken,
          phone: user.phone,
        };
        if (user && userPassword) {
          saveTokenInLocalStorage(payloadUser);
          dispatch(loginSuccess(payloadUser));
          setTimeout(() => {
            dispatch(login.actions.closeLoginForm());
            history.push('/');
          }, 500);
        }
      })
      .catch((error) => {
        dispatch(loginFailedAction('Niepoprawny mail lub hasło'));
      });
  };
};

const loginSuccess = (user) => {
  return { type: Types.SUCCESS_LOGIN, payload: { user } };
};

const loginFailedAction = (message) => ({
  type: Types.LOGIN_FAIL,
  payload: message,
});

const logoutUser = () => {
  localStorage.removeItem('currentUser');
  return {
    type: Types.LOGOUT_USER,
  };
};

export const authActions = {
  singupUser,
  loginUser,
  logoutUser,
};
