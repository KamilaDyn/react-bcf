import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectors } from 'store';

export const useSearchInput = () => {
  const [searchProduct, setSearchProduct] = useState('');
  const [displayProducts, setDisplayProducts] = useState(false);
  const products = useSelector(selectors.products.getProducts);

  const handleSearch = (e) => {
    setSearchProduct(e.target.value);
    setDisplayProducts(true);
  };

  const filterProductsByName = products.filter((product) => {
    return (
      product.type.toLowerCase().indexOf(searchProduct.toLowerCase()) !== -1
    );
  });
  const productItems = filterProductsByName.map((product, i) => ({
    title: product.title.substr(0, 50),
    type: product.type,
  }));
  return {
    handleSearch,
    filterProductsByName,
    productItems,
    searchProduct,
    displayProducts,
    setDisplayProducts,
  };
};
