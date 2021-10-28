import { Types } from "../actions/actionsType";
const initialState = {};

export const loginMessage = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.SET_MESSAGE:
      return { message: payload };
    case Types.CLEAR_MESSAGE:
      return { message: "" };
    default:
      return state;
  }
};
