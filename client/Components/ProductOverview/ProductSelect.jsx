import React, { useContext } from 'react';
import Stars from '../Helpers/Stars';
import Price from '../Helpers/Price';
import StyleSelector from './StyleSelector';
import SKUSelector from './SKUSelector';

import AppContext from '../Contexts/AppContext';

const ProductSelect = () => {
  const name = 'Product Select';
  const { productInfo } = useContext(AppContext);
  return (
    <div>
      <h4>{name}</h4>
      <Stars />
      <div>{productInfo.category}</div>
      <div>{productInfo.name}</div>
      <Price />
      <StyleSelector />
      <SKUSelector />
    </div>
  );
};

export default ProductSelect;
