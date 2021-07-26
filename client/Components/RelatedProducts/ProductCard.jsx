import React from 'react';
import ThumbnailCarousel from './ThumbnailCarousel';
import PCActionButton from './PCActionButton';
import ProductInfo from './ProductInfo';

const ProductCard = () => {
  const a = 'ProductCard';
  return (
    <div>
      <div>{a}</div>
      <PCActionButton />
      <ThumbnailCarousel />
      <ProductInfo />
    </div>
  );
};

export default ProductCard;
