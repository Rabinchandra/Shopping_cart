import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';
import CartItem from './CartItem';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function Cart() {
  const { carts } = useContext(CartContext);
  const [totalAmount, setTotalAmount] = useState();

  useEffect(() => {
    // Calculating total amount every time carts changes
    const total = carts.reduce((sum, cart) => {
      return (sum += +cart.price * cart.quantity);
    }, 0);

    setTotalAmount(total);
  }, [carts]);

  return (
    <>
      <Link to='/'>
        <ArrowBackIcon className='text-dark' />
      </Link>
      {carts?.length === 0 ? (
        <h5 className=' text-center'>Cart List is empty!</h5>
      ) : (
        <div
          className='d-flex cart-container justify-content-between mt-4'
          style={{ minWidth: '600px' }}>
          {/* Cart List */}
          <section
            className='card px-4 py-3 cart-list'
            style={{ width: '70%' }}>
            <h4>Cart ({carts.length} items)</h4>
            <div className='list-group mt-5 list-group-flush'>
              {carts.map((cart) => {
                return (
                  <CartItem cart={{ ...cart }} key={`cart-item-${cart.id}`} />
                );
              })}
            </div>
          </section>

          <section>
            {/* Checkout card */}
            <section
              className='card w-25 p-4 mx-auto checkout'
              style={{ minWidth: '400px', height: '320px' }}>
              <h4 className='mb-4'>The total amount of</h4>
              <div className='d-flex justify-content-between bd-lead'>
                <div>Amount</div>
                <div>$100</div>
              </div>
              <div className='d-flex justify-content-between bd-lead'>
                <div>${totalAmount}</div>
                <div>$0</div>
              </div>
              <hr />
              <div className='d-flex justify-content-between'>
                <h5>Total Amount</h5>
                <h5>${totalAmount}</h5>
              </div>
              <button className='btn btn-primary btn-lg mt-4'>Check out</button>
            </section>
            {/* Coupon Card */}
            <section className='card mt-5 p-4' style={{ minWidth: '400px' }}>
              <div className='dark-grey-text mb-3'>
                Add a discount code (optional)
              </div>
              <div className='row align-items-center'>
                <div className='col-8'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter coupon code here'
                  />
                </div>
                <div className='col'>
                  <button className='btn btn-secondary lead'>Apply</button>
                </div>
              </div>
            </section>
          </section>
        </div>
      )}
    </>
  );
}

export default Cart;
