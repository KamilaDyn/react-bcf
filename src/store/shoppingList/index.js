import { ShoppingListReducer } from "./reducer";
import { shoppingListActions } from "./actions";
import { shoppingSelectors } from "./selectors";

export const shoppingList = {
  selectors: shoppingSelectors,
  reducer: ShoppingListReducer,
  actions: shoppingListActions,
};
