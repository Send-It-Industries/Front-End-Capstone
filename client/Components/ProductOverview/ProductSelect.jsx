import React, { useContext } from 'react';
import Stars from '../Helpers/Stars';
import Price from '../Helpers/Price';
import StyleSelector from './StyleSelector';
import SKUSelector from './SKUSelector';

import AppContext from '../Contexts/AppContext';

const ProductSelect = () => {
  const name = 'Product Select';
  const { productInfo, selectedStyle } = useContext(AppContext);
  return (
    <div>
      <h4>{name}</h4>
      <Stars />
      <div>{productInfo.category}</div>
      <div>{productInfo.name}</div>
      <Price actualPrice={selectedStyle.original_price} salePrice={selectedStyle.sale_price} />
      <StyleSelector />
      <SKUSelector />
    </div>
  );
};

export default ProductSelect;
