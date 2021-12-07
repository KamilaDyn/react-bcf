import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectors } from 'store';
export const useSelectCategory = () => {
  const [selectCategory, setSelectCategory] = useState(false);

  const products = useSelector(selectors.products.getProducts);

  const result = products.map((item: any) => {
    return item.category;
  });
  const reduceCategory = [...new Set(result)] as Array<string>;

  return {
    selectCategory,
    setSelectCategory,
    reduceCategory,
  };
};
