import { ACTIONS_CART } from '@/reducers/cart';
import { useContext } from 'react';
import { CartContext } from '../contexts/cart';

export const useCart = () => {
  const { cart, dispatch } = useContext(CartContext);

  const addToCart = (product) => {
    dispatch({ type: ACTIONS_CART.ADD_CART, payload: product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: ACTIONS_CART.REMOVE_CART, payload: product });
  };

  const clearCart = () => {
    dispatch({ type: ACTIONS_CART.CLEAR_CART });
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  };
};
