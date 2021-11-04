import { ProductReducer } from "./reducer";
import { productSelectors } from "./selectors";
export { getAllProducts, addNewProduct, deleteOneProduct } from "./actions";

export const products = {
  reducer: ProductReducer,
  selectors: productSelectors,
};
