import { createContext, useState } from 'react';

export const FilterContext = createContext();

export const ProductsFilterProvider = ({ children }) => {
  const [filter, setProductsFilter] = useState({
    category: 'all',
    price: 0,
  });

  return (
    <FilterContext.Provider value={{ filter, setProductsFilter }}>
      {children}
    </FilterContext.Provider>
  );
};
