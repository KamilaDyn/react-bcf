import { AuthReducer } from "./reducer";
import { authSelectors } from "./selectors";

export { loginUser, logoutUser, loginSuccess, singupUser } from "./actions";

export const auth = {
  reducer: AuthReducer,
  selectors: authSelectors,
};
