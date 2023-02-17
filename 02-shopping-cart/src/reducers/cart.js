export const initialStateCart =
  JSON.parse(window.localStorage.getItem('cart')) || [];

export const ACTIONS_CART = {
  ADD_CART: 'add-cart',
  REMOVE_CART: 'remove-cart',
  CLEAR_CART: 'clear-cart',
};

const updateLocalStorage = (state) => {
  window.localStorage.setItem('cart', JSON.stringify(state));
};

export const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS_CART.ADD_CART:
      const existCart = state.findIndex((item) => item.id === payload.id);
      if (existCart !== -1) {
        //existe
        const cloneCart = structuredClone(state);
        cloneCart[existCart].quantity += 1;
        updateLocalStorage(cloneCart);
        return cloneCart;
      }
      const newStateQuantity = [...state, { ...payload, quantity: 1 }];
      updateLocalStorage(newStateQuantity);
      return newStateQuantity;

    case ACTIONS_CART.REMOVE_CART:
      const newState = state.filter((item) => item.id !== payload.id);
      updateLocalStorage(newState);
      return newState;

    case ACTIONS_CART.CLEAR_CART:
      updateLocalStorage([]);
      return [];

    default:
      return state;
  }
};
