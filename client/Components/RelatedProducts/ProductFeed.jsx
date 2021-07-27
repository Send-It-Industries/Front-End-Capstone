import React from 'react';
import ProductCard from './ProductCard';
import ComparisonModal from './ComparisonModal';

const ProductFeed = () => {
  const name = 'Product Feed';
  return (
    <div>
      <h2>{name}</h2>
      <ProductCard />
      <ComparisonModal />
    </div>
  );
};

export default ProductFeed;
