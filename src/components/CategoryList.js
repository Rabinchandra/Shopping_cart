import React from 'react';

function CategoryList({ setCategory }) {
  return (
    <div className='body__category-list w-25 text-center'>
      <h4>CATEGORIES</h4>
      <ul className='list-group mt-4 list-group-flush'>
        <li
          className='list-group-item list-group-item-action'
          onClick={() => setCategory('shoes')}>
          Shoes
        </li>
        <li
          className='list-group-item list-group-item-action'
          onClick={() => setCategory('t-shirt')}>
          T-Shirt
        </li>
        <li
          className='list-group-item list-group-item-action'
          onClick={() => setCategory('electronics')}>
          Electronics
        </li>
        <li
          className='list-group-item list-group-item-action'
          onClick={() => setCategory('toys')}>
          Toys
        </li>
      </ul>
    </div>
  );
}

export default CategoryList;
