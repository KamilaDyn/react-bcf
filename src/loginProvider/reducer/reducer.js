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
  errorMessage: "",
  successMessage: "",
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
        profile: payload,
        isLoggedIn: true,
        errorMessage: "",
        successMessage: "Zostałeś zalogowany",
      };
    case Types.LOGOUT_USER:
      return {
        ...state,
        profile: {
          user: "",
          token: "",
        },
        isLoggedIn: false,
        errorMessage: "",
        successMessage: "",
      };
    case Types.LOGIN_FAIL:
      return {
        ...state,
        errorMessage: payload,
        successMessage: "",
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
