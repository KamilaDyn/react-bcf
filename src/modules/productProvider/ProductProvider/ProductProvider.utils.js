import { useReducer } from "react";

const shoppingListReducer = (shoppingList, action) => {
    switch (action.type) {
        case "ADD":
            return [...shoppingList, action.productItem];
        case "REMOVE":
            return shoppingList.filter((product) => product.id !== action.id);
        case "INCREMENT":
            return [...shoppingList];
        case "DECREMENT":
            return;
        default:
            throw new Error("Ooop, something went wrong...");
    }
};


export const useProductProvider = () => {
    const [shoppingList, dispatch] = useReducer(shoppingListReducer, []);

    const countItemsInBasket = () => {
        if (shoppingList.length > 0) {
            const item = shoppingList.filter((item) => item.count > 0);
            return item.map((i) => i.count).reduce((a, b) => a + b, 0);
        }
    };

    return {
        dispatch,
        shoppingList,
        countItemsInBasket,
    };

}