import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='app__navbar navbar bg-primary px-4 py-3'>
      <Link
        to='/upload_product'
        className='text-light d-flex align-items-center'>
        <CloudUploadIcon id='upload-icon' />
        <span className='mx-2'>Upload Product</span>
      </Link>
      <Link to='/cart' className='text-light'>
        <ShoppingCartIcon id='shopping-icon' />
      </Link>
    </nav>
  );
}

export default Navbar;
