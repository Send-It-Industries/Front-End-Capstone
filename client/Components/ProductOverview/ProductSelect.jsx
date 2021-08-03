import React, { useContext } from 'react';
import Stars from '../Helpers/Stars';
import Price from '../Helpers/Price';
import StyleSelector from './StyleSelector';
import SKUSelector from './SKUSelector';

import AppContext from '../Contexts/AppContext';

const ProductSelect = () => {
  const { productInfo, selectedStyle } = useContext(AppContext);

  const productSelectStyle = {
    gridColumn: '2 / 3',
    gridRow: '1 / 2',
    overflow: 'auto', /* can remove once finish carousel */
  };
  return (
    <div id="ProductSelect" style={productSelectStyle}>
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
