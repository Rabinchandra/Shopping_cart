import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import UploadProduct from './components/UploadProduct';
import { ProductsContextProvider } from './context/ProductsContext';
import { CartContextProvider } from './context/CartContext';
import Cart from './components/Cart';

function App() {
  const [category, setCategory] = useState();

  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <div className='app'>
          <Router>
            <Navbar />
            <section className='app__body p-5'>
              <Route
                path='/'
                exact
                render={() => (
                  <div className='d-flex'>
                    <CategoryList setCategory={setCategory} />
                    <ProductList category={category} />
                  </div>
                )}
              />
              <Route
                path='/upload_product'
                exact
                render={() => <UploadProduct />}
              />
              <Route path='/cart' exact render={() => <Cart />} />
            </section>
          </Router>
        </div>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
