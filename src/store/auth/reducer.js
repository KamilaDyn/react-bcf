import { Types } from "./actions";

const profile = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : "";
export const initialState = {
  profile: {
    firstName: "" || profile.firstName,
    secondName: "" || profile.secondName,
    email: "" || profile.email,
    accessToken: "" || profile.accessToken,
    phone: "" || profile.phone,
  },
  isLoggedIn: profile.email ? true : false,
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
    case Types.SUCCESS_LOGIN:
      return {
        ...state,
        profile: payload.user,
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
