import { ProductReducer } from "./reducer";
import { productSelectors } from "./selectors";
import { productActions } from "./actions";

export const products = {
  reducer: ProductReducer,
  selectors: productSelectors,
  actions: productActions,
};
