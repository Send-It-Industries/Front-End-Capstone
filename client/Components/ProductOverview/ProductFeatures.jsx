import React, { useContext } from 'react';

import AppContext from '../Contexts/AppContext';

const ProductFeatures = () => {
  const { productInfo } = useContext(AppContext);
  const productFeaturesStyle = {
    gridColumn: '1 / 3',
    gridRow: '2 / 3',
  };
  return (
    <div id="ProductFeatures" style={productFeaturesStyle}>
      <div><b>{productInfo.slogan}</b></div>
      <p>{productInfo.description}</p>
      {
        productInfo.features.map(({ feature, value }) => (
          <div>
            {`${feature}${value ? ` - ${value}` : ''}`}
          </div>
        ))
      }
    </div>
  );
};

export default ProductFeatures;
