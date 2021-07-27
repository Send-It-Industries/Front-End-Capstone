import React from 'react';
import Stars from '../Helpers/Stars';
import Price from '../Helpers/Price';
import StyleSelector from './StyleSelector';
import SKUSelector from './SKUSelector';

const ProductSelect = () => {
  const name = 'Product Select';
  return (
    <div>
      <h4>{name}</h4>
      <Stars />
      <div>Product Category</div>
      <div>Product Name</div>
      <Price />
      <StyleSelector />
      <SKUSelector />
    </div>
  );
};

export default ProductSelect;
