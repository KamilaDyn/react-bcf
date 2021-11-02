import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./auth";
import { LoginReducer } from "./login";

const rootReducer = combineReducers({
  auth: AuthReducer,
  loggingForm: LoginReducer,
});

const middleware = applyMiddleware(thunk);

export const configureStore = () => {
  return createStore(rootReducer, compose(middleware));
};
