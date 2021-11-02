import { Types } from "./actionsType";
export const openLoginForm = () => {
  return { type: Types.OPEN_LOGIN_FORM };
};
export const closeLoginForm = () => {
  return { type: Types.CLOSE_LOGIN_FORM };
};
