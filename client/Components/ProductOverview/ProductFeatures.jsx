import React, { useContext } from 'react';

import AppContext from '../Contexts/AppContext';

const ProductFeatures = () => {
  const name = 'Product Features';
  const { productInfo } = useContext(AppContext);
  return (
    <div>
      <h4>{name}</h4>
      <div>{productInfo.slogan}</div>
      <div>{productInfo.description}</div>
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
