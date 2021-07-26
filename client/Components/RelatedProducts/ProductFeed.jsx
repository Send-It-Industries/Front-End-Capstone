import React from 'react';
import ProductCard from './ProductCard';
import ComparisonModal from './ComparisonModal';

const ProductFeed = () => {
  const a = 'Product Feed';
  return (
    <div>
      <div>{a}</div>
      <ProductCard />
      <ComparisonModal />
    </div>
  );
};

export default ProductFeed;
