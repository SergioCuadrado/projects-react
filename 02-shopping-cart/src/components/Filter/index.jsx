import { useContext, useId } from 'react';
import { useFilters } from '../../hooks/useFilters';
import './styles.css';

export const FilterProducts = () => {
  const priceFilter = useId();
  const categoryFilter = useId();
  const { setProductsFilter, filter } = useFilters();

  const handlePriceFilter = (event) => {
    const price = Number(event.target.value);
    setProductsFilter((prevState) => ({ ...prevState, price }));
  };

  const handleCategoryFilter = (event) => {
    setProductsFilter((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <div className="filter">
      <div className="price-filter">
        <label htmlFor={priceFilter}>Precio minimo:</label>
        <input
          name={priceFilter}
          id={priceFilter}
          type="range"
          min="0"
          max="1000"
          onChange={handlePriceFilter}
          value={filter.price}
        />
        <span>{filter.price}</span>
      </div>
      <div className="category-filter">
        <label htmlFor={categoryFilter}>Categoría:</label>
        <select
          name={categoryFilter}
          id={categoryFilter}
          onChange={handleCategoryFilter}
          value={filter.category}
        >
          <option value="Lista por categoria" disabled>
            Lista por categoria
          </option>
          <option value="all">Todos</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
          <option value="skincare">Cuidado de piel</option>
        </select>
      </div>
    </div>
  );
};
