import { LoginReducer } from "./reducer";
import { loginSelectors } from "./selectors";
export { openLoginForm, closeLoginForm } from "./actions";

export const login = {
  reducer: LoginReducer,
  selectors: loginSelectors,
};
