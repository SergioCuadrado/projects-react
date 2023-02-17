import { products as initialProducts } from '@/mocks/products.json';
import { CartProvider } from './contexts/cart';

import { Products } from '@/components/Products';
import { FilterProducts } from '@/components/Filter';
import { Cart } from './components/Cart';

import { useFilters } from './hooks/useFilters';

import './App.css';

function App() {
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts);

  return (
    <CartProvider>
      <div className="App">
        <h2>Shopping Cart 🏘️</h2>
        <FilterProducts />
        <Products products={filteredProducts} />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
