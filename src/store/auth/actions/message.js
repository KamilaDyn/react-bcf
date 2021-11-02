import { Types } from "./actionsType";

export const setMessage = (message) => ({
  type: Types.SUCCESS_MESSAGE,
  payload: message,
});
