import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { auth } from "./auth";
import { login } from "./login";
import { products } from "./product";
import { shoppingList } from "./shoppingList";
const rootReducer = combineReducers({
  auth: auth.reducer,
  login: login.reducer,
  products: products.reducer,
  shoppingList: shoppingList.reducer,
});

const middleware = applyMiddleware(thunk);

export const configureStore = () => {
  return createStore(rootReducer, compose(middleware));
};

export const selectors = {
  login: login.selectors,
  auth: auth.selectors,
  products: products.selectors,
  shoppingList: shoppingList.selectors,
};

export const actions = {
  products: products.actions,
  auth: auth.actions,
  login: login.actions,
  shoppingList: shoppingList.actions,
};
