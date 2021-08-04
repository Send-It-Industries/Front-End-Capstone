import React, { useContext } from 'react';
import ImageDisplay from './ImageDisplay';
import ProductSelect from './ProductSelect';
import ProductFeatures from './ProductFeatures';
import AppContext from '../Contexts/AppContext';

const ProductOverview = () => {
  const { productInfo, selectedStyle } = useContext(AppContext);
  const productOverviewStyle = {
    display: 'grid',
    gridTemplateRows: 'minmax(550px, 55vmin) minmax(200px, 20vmin)',
    gridTemplateColumns: '65% 35%',
    width: '90vw',
    maxHeight: '1000px',
    maxWidth: '1250px',
    /* height: '100%', */
  };
  // debugger;
  return (
    Object.keys(productInfo).length && Object.keys(selectedStyle).length? (
    // productInfo ? (
      <div id="productOverview" style={productOverviewStyle}>
        <ImageDisplay />
        <ProductSelect />
        <ProductFeatures />
      </div>
    ) : (<div>Loading...</div>)
  );
};

export default ProductOverview;
