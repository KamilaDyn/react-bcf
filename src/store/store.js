import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { auth } from "./auth";
import { login } from "./login";
import { products } from "./product";
import { shoppingList } from "./shoppingList";
import { searchProducts } from "./searchProducts";
const rootReducer = combineReducers({
  auth: auth.reducer,
  login: login.reducer,
  products: products.reducer,
  shoppingList: shoppingList.reducer,
  searchProducts: searchProducts.reducer,
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
  searchProducts: searchProducts.selectors,
};

export const actions = {
  products: products.actions,
  auth: auth.actions,
  login: login.actions,
  shoppingList: shoppingList.actions,
  searchProducts: searchProducts.actions,
};
