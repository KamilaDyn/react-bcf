import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectors } from 'store';

interface Product {
  id: number;
  title: string;
  price: number;
  sale: number;
  description: string;
  category: string;
  type: string;
  image: string;
  stock: number;
}

export const useSelectCategory = () => {
  const [selectCategory, setSelectCategory] = useState(false);

  const products = useSelector(selectors.products.getProducts);

  const result = products.map((item: Product) => {
    return item.category;
  });
  const reduceCategory: string[] = [...new Set<string>(result)];

  return {
    selectCategory,
    setSelectCategory,
    reduceCategory,
  };
};
