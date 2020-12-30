import React, { useState } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import { db, storage } from '../firebase/config';
import { v4 as uuidv4 } from 'uuid';

function UploadProduct() {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('shoes');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [image, setImage] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const uploadHandler = (e) => {
    e.preventDefault();

    const imageFormats = ['image/png', 'image/jpeg', 'image/jpg'];

    if (!imageFormats.includes(image.type)) {
      alert('Image format not supported!');
      return;
    }

    // Firestore
    const product_id = uuidv4();
    const storageRef = storage.ref(product_id);

    setIsUploading(true);

    // Upload to firestore
    storageRef.put(image).on(
      'statechanged',
      (snap) => {
        const percent = (snap.bytesTransferred / snap.totalBytes) * 100;
      },
      (err) => console.log(err),
      async () => {
        const url = await storageRef.getDownloadURL();
        // Add to firestore
        db.collection('products').add({
          id: product_id,
          productName,
          category,
          description,
          rating,
          price,
          imageUrl: url,
        });

        setIsUploading(false);

        alert('Product Uploaded Sucessfully!');
        clearInputs();
      }
    );
  };

  const clearInputs = () => {
    setProductName('');
    setPrice('');
    setRating('');
    setCategory('shoes');
    setDescription('');
    setImage('');
  };

  const clearImage = (e) => {};

  return (
    <>
      <Link to='/' className='text-dark'>
        <ArrowBackIcon className='back-button mb-4' />
      </Link>
      <form
        className='body__upload-product container w-75'
        onSubmit={uploadHandler}>
        <section className='form-group'>
          <label htmlFor='product-name' className='mb-2'>
            Product Name
          </label>
          <input
            type='text'
            id='product-name'
            className='form-control'
            onChange={(e) => setProductName(e.target.value)}
            value={productName}
            required
          />
        </section>

        <section className='form-group mt-3'>
          <label htmlFor='price' className='mb-2'>
            Price
          </label>
          <input
            type='number'
            id='price'
            min='5'
            className='form-control'
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            required
          />
        </section>

        <section className='form-group mt-3'>
          <label htmlFor='rating' className='mb-2'>
            Rating
          </label>
          <input
            type='number'
            min='1'
            max='5'
            id='rating'
            className='form-control'
            onChange={(e) => setRating(e.target.value)}
            value={rating}
            required
          />
        </section>

        <section className='form-group mt-3'>
          <label htmlFor='category' className='mb-2'>
            Category
          </label>
          <select
            name='category'
            id='category'
            className='form-control'
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            required>
            <option value='shoes'>Shoes</option>
            <option value='t-shirt'>T-Shirt</option>
            <option value='electronics'>Electronics</option>
            <option value='toys'>Toys</option>
          </select>
        </section>

        <section className='form-group mt-3'>
          <label htmlFor='description' className='mb-2'>
            Description
          </label>
          <textarea
            name='description'
            id='description'
            cols='30'
            rows='4'
            className='form-control'
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required></textarea>
        </section>

        <section className='form-group mt-3'>
          <label htmlFor='product_image' className='mb-2'>
            Product Image
          </label>
          <input
            type='file'
            className='form-control'
            id='product-image'
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </section>

        <button
          className='btn btn-success btn-lg mt-4 w-100'
          type='submit'
          id='upload-product'>
          {isUploading ? 'UPLOADING...' : 'UPLOAD PRODUCT'}
        </button>
      </form>
    </>
  );
}

export default UploadProduct;
