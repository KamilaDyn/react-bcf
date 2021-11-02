import { Types } from "./actions";
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
