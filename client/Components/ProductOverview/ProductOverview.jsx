import React from 'react';
import ImageDisplay from './ImageDisplay';
import ProductSelect from './ProductSelect';
import ProductFeatures from './ProductFeatures';

const ProductOverview = () => {
  const productOverviewStyle = {
    display: 'grid',
    gridTemplateRows: '55vh 20vh',
    gridTemplateColumns: '65% 35%',
    width: '100vmin',
    maxWidth: '1250px',
    /* height: '100%', */
  };

  return (
    <div id="productOverview" style={productOverviewStyle}>
      <ImageDisplay />
      <ProductSelect style={{ 'grid-area': 'productSelect' }} />
      <ProductFeatures style={{ 'grid-area': 'productFeatures' }} />
    </div>
  );
};

export default ProductOverview;
