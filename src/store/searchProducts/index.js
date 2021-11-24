import { searchProductsActions } from "./actions";
import { ProductsTypeReducer } from "./reducer";
import { searchProductSelectors } from "./selectors";

export const searchProducts = {
  reducer: ProductsTypeReducer,
  selectors: searchProductSelectors,
  actions: searchProductsActions,
};
