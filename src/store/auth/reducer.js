import { Types } from "./actions";

const email = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).email
  : "";
const token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).password
  : "";
export const initialState = {
  profile: {
    firstName: "",
    secondName: "",
    email: "" || email,
    token: "" || token,
    phone: "",
  },
  isLoggedIn: email ? true : false,
  errorMessage: "",
  successMessage: "",
};
export const AuthReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.ADD_USER:
      return {
        ...state,
        profile: payload,
        successMessage: "Zostałeś zarejestrowany",
        errorMessage: "",
        isLoggedIn: true,
      };
    case Types.REQUEST_LOGIN:
      return {
        ...state,
        isLoggedIn: false,
      };
    case Types.SUCCESS_LOGIN:
      return {
        ...state,
        profile: {
          email: payload.email,
          token: payload.password,
        },
        isLoggedIn: true,
        errorMessage: "",
        successMessage: "Zostałeś zalogowany",
      };
    case Types.LOGOUT_USER:
      return {
        ...state,
        profile: {
          email: "",
          token: "",
        },
        isLoggedIn: false,
        errorMessage: "",
        successMessage: "",
      };
    case Types.ADD_USER_FAIL:
      return {
        ...state,
        errorMessage: payload,
        successMessage: "",
        isLoggedIn: false,
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
