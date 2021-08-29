import React, { useState } from 'react';
import { ProductContext } from '../context';
import { useProductProvider } from './ProductProvider.utils';

const ProductProvider = ({ children }) => {
    const [openCard, setOpenCard] = useState(false);


    const { shoppingList, dispatch, countItemsInBasket } = useProductProvider();
    const productContextValue = {
        shoppingList: shoppingList,
        dispatch: dispatch,
        countItemsInBasket: countItemsInBasket,
        open: openCard,
        setOpen: setOpenCard,
    }
    return (
        <ProductContext.Provider value={productContextValue}>{children}</ProductContext.Provider>
    )
}

export default ProductProvider;