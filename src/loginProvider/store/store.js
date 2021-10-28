import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { AuthReducer, LoginReducer } from "../reducer";

const rootReducer = combineReducers({
  profile: AuthReducer,
  loggingForm: LoginReducer,
});

const middleware = applyMiddleware(thunk);

const configureStore = () => {
  return createStore(rootReducer, compose(middleware));
};

export default configureStore;
