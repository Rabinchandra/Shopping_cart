import React, { useReducer, createContext, useEffect } from 'react';
import { db } from '../firebase/config';
import { productsReducer } from '../reducers/ProductsReducer';

export const ProductsContext = createContext();

export function ProductsContextProvider(props) {
  const [products, dispatch] = useReducer(productsReducer, []);

  useEffect(() => {
    db.collection('products').onSnapshot((snap) => {
      let docs = [];
      // Get each doc and push to docs array
      snap.docs.forEach((doc) => {
        docs.push(doc.data());
      });

      dispatch({ type: 'SET_PRODUCTS', products: docs });
    });
  }, []);

  return (
    <ProductsContext.Provider value={{ products, dispatch }}>
      {props.children}
    </ProductsContext.Provider>
  );
}

export default ProductsContext;
