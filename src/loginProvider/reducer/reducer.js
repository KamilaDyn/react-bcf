import { Types } from "../actions/actionsType";

const user = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).user
  : "";
const token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).accessToken
  : "";
export const initialState = {
  profile: {
    user: "" || user,
    token: "" || token,
  },
  isLoggedIn: user ? true : false,
};
export const AuthReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.REQUEST_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case Types.SUCCESS_LOGIN:
      return {
        ...state,
        user: payload.user,
        isLoggedIn: true,
      };
    case Types.ADD_USER:
      return {
        ...state,
        profile: payload,
      };
    case Types.LOGOUT_USER:
      console.log(state);
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
export const loginState = {
  isLoggedUser: initialState.isLoggedIn,
};

export const LoginReducer = (loginState = false, action) => {
  switch (action.type) {
    case Types.OPEN_LOGIN_FORM:
      return {
        loginState: true,
      };
    case Types.CLOSE_LOGIN_FORM:
      return {
        loginState: false,
      };
    default:
      return loginState;
  }
};
