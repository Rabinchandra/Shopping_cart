import React, { useContext } from 'react';
import { toSentenceCase } from '../utilities';
import Rating from './Rating';
import { CartContext } from '../context/CartContext';

function CartItem({ cart }) {
  const { id, productName, imageUrl, category, price, rating, quantity } = cart;
  const { dispatch } = useContext(CartContext);

  return (
    <li className='list-group-item d-flex mb-5 w-100'>
      <div className='w-25'>
        <img
          src={imageUrl}
          alt=''
          className='w-100'
          style={{ objectFit: 'contain', height: '150px' }}
        />
      </div>

      <div className='px-3 mb-3' style={{ flex: '1' }}>
        <h5>{productName}</h5>
        <small className='text-muted'>{toSentenceCase(category)}</small>
        <Rating rating={rating} />
        <button className='btn btn-success mt-3'>Buy Now</button>
        <button
          className='btn btn-light mx-3'
          onClick={() => dispatch({ type: 'REMOVE_PRODUCT', id })}>
          Remove
        </button>
      </div>

      <div className='d-flex flex-column'>
        <section>
          <button
            className='btn btn-primary btn-sm font-weight-bold'
            style={{ fontSize: '16px' }}
            onClick={() =>
              quantity > 1
                ? dispatch({ type: 'DECREMENT_QUANTITY', id })
                : dispatch({ type: 'REMOVE_PRODUCT', id })
            }>
            -
          </button>
          <span className='mx-3'>{quantity}</span>
          <button
            className='btn btn-primary btn-sm font-weight-bold'
            style={{ fontSize: '16px' }}
            onClick={() => dispatch({ type: 'INCREMENT_QUANTITY', id })}>
            +
          </button>
        </section>
        <section
          className='d-flex align-items-end justify-content-end'
          style={{ flexGrow: '.9' }}>
          <h4>$ {price}</h4>
        </section>
      </div>
    </li>
  );
}

export default CartItem;
