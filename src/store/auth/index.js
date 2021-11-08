import { authActions } from "./actions";
import { AuthReducer } from "./reducer";
import { authSelectors } from "./selectors";

export const auth = {
  reducer: AuthReducer,
  selectors: authSelectors,
  actions: authActions,
};
