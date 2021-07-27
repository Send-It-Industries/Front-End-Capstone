import React from 'react';
import ImageDisplay from './ImageDisplay';
import ProductSelect from './ProductSelect';
import ProductFeatures from './ProductFeatures';

const ProductOverview = () => {
  const name = 'Product Overview';
  return (
    <div>
      <h2>{name}</h2>
      <ImageDisplay />
      <ProductSelect />
      <ProductFeatures />
    </div>
  );
};

export default ProductOverview;
