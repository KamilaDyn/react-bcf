import { LoginReducer } from "./reducer";
import { loginSelectors } from "./selectors";
import { loginActions } from "./actions";

export const login = {
  reducer: LoginReducer,
  selectors: loginSelectors,
  actions: loginActions,
};
