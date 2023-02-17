import { useContext } from 'react';
import { FilterContext } from '../contexts/filter';

export const useFilters = () => {
  const { filter, setProductsFilter } = useContext(FilterContext);

  const filterProducts = (products) => {
    return products.filter((product) => {
      if (
        (filter.category === 'all' || product.category === filter.category) &&
        product.price >= filter.price
      )
        return product;
    });
  };

  return { filter, setProductsFilter, filterProducts };
};
