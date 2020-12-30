import React, { useContext, useEffect, useState } from 'react';
import Rating from './Rating';
import { CartContext } from '../context/CartContext';

function ProductItem({ product }) {
  const { productName, imageUrl, price, rating, id } = product;
  const { dispatch, carts } = useContext(CartContext);
  const [quantity, setQuantity] = useState();

  const addToCart = () => {
    dispatch({
      type: 'ADD_PRODUCT',
      product: { ...product, quantity: 1 },
    });
  };

  const incrementQuantity = () => {
    dispatch({ type: 'INCREMENT_QUANTITY', id });
  };

  const decrementQuantity = () => {
    dispatch({ type: 'DECREMENT_QUANTITY', id });
  };

  useEffect(() => {
    const found = carts.find((item) => item.id === id);
    if (found) {
      setQuantity(found.quantity);
    }
  }, [carts]);

  useEffect(() => {
    if (quantity === 0) {
      dispatch({ type: 'REMOVE_PRODUCT', id });
    }
  }, [quantity]);

  return (
    <div className='card' style={{ width: '250px' }}>
      <section
        style={{ height: '50%' }}
        className='d-flex justify-items-center'>
        <img
          src={imageUrl}
          alt=''
          style={{ maxWidth: '100%', objectFit: 'contain' }}
        />
      </section>
      <div className='card-body'>
        <h5 className='card-title' style={{ height: '50px' }}>
          {productName}
        </h5>
        <strong className='card-subtitle'>Price: $ {price}</strong>
        <Rating rating={rating} />

        {quantity > 0 ? (
          <div
            className='mt-4 d-flex justify-content-around w-75 mx-auto'
            style={{ fontSize: '20px' }}>
            <button
              className='btn btn-primary btn-sm'
              style={{ fontSize: '18px', fontWeight: 'bold' }}
              onClick={decrementQuantity}>
              -
            </button>
            {quantity}
            <button
              className='btn btn-primary btn-sm'
              style={{ fontSize: '18px', fontWeight: 'bold' }}
              onClick={incrementQuantity}>
              +
            </button>
          </div>
        ) : (
          <button
            className='btn btn-primary btn-lg w-100 mt-4'
            onClick={addToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
