import React, { createContext, useReducer } from 'react';
import { cartReducer } from '../reducers/CartReducer';

export const CartContext = createContext();

export function CartContextProvider(props) {
  const [carts, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ carts, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
