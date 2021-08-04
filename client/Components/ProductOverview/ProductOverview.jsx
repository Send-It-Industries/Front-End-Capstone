import React from 'react';
import ImageDisplay from './ImageDisplay';
import ProductSelect from './ProductSelect';
import ProductFeatures from './ProductFeatures';

const ProductOverview = () => {
  const productOverviewStyle = {
    display: 'grid',
    gridTemplateRows: 'minmax(550px, 55vh) minmax(200px, 20vh)',
    gridTemplateColumns: '65% 35%',
    width: '90vw',
    maxWidth: '1250px',
    /* height: '100%', */
  };

  return (
    <div id="productOverview" style={productOverviewStyle}>
      <ImageDisplay />
      <ProductSelect />
      <ProductFeatures />
    </div>
  );
};

export default ProductOverview;
