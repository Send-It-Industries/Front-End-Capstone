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
    display: 'grid',
    gridTemplateColumns: '100%',
    gridTemplateRows: 'repeat(6, auto)',
    padding: '15% 0',
  };
  return (
    <div id="ProductSelect" style={productSelectStyle} data-testid="productSelect">
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
