import { useCart } from '@/hooks/useCart';
import { AddToCartIcon, RemoveFromCartIcon } from '../Icons';
import './styles.css';

const ListProducts = ({ products, addToCart, addedToCart, removeFromCart }) => (
  <ul>
    {products.map((product) => (
      <li className="product" key={product.id}>
        <img src={product.thumbnail} alt={product.title} />
        <h4>
          {product.title} - <span>${product.price}</span>
        </h4>
        <button
          onClick={() =>
            addedToCart(product) ? removeFromCart(product) : addToCart(product)
          }
        >
          {addedToCart(product) ? <RemoveFromCartIcon /> : <AddToCartIcon />}
        </button>
      </li>
    ))}
  </ul>
);

export const Products = ({ products }) => {
  const { addToCart, cart, removeFromCart } = useCart();
  const addedOnCart = (product) => cart.find((item) => item.id === product.id);
  return (
    <div className="products">
      <ListProducts
        products={products}
        addToCart={addToCart}
        addedToCart={addedOnCart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};
