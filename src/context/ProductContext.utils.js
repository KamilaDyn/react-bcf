import React from "react";
import { ProductContext } from "./ProductContext";

export function useProductContext() {
    const productContext = React.useContext(ProductContext);
    if (productContext === undefined) {
        throw new Error('useCount must be used within a CountProvider')
    }
    return { productContext }
}

