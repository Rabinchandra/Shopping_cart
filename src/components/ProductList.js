import React, { useContext } from 'react';
import ProductsContext from '../context/ProductsContext';
import ProductItem from './ProductItem';

function ProductList({ category }) {
  const { products } = useContext(ProductsContext);

  return (
    <div className='px-5 products-list w-70'>
      {products
        ?.filter((product) => product.category === category)
        .map((product) => {
          return <ProductItem product={product} key={product.id} />;
        })}
    </div>
  );
}

export default ProductList;
