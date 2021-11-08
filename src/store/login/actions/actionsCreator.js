import { Types } from "./actionsType";
const openLoginForm = () => {
  return { type: Types.OPEN_LOGIN_FORM };
};
const closeLoginForm = () => {
  return { type: Types.CLOSE_LOGIN_FORM };
};

export const loginActions = {
  openLoginForm,
  closeLoginForm,
};
