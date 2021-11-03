import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { auth } from "./auth";
import { login } from "./login";

const rootReducer = combineReducers({
  auth: auth.reducer,
  login: login.reducer,
});

const middleware = applyMiddleware(thunk);

export const configureStore = () => {
  return createStore(rootReducer, compose(middleware));
};

export const selectors = { login: login.selectors, auth: auth.selectors };
