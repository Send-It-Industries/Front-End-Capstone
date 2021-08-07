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
    overflow: 'visible', /* can remove once finish carousel */
    display: 'grid',
    gridTemplateColumns: '100%',
    gridTemplateRows: 'repeat(4, auto) 50% 25%',
    padding: '10% 0',
  };

  const nameStyle = {
    fontSize: '2.5rem',
  };

  return (
    <div id="ProductSelect" style={productSelectStyle} data-testid="productSelect">
      <Stars />
      <div>{productInfo.category.toUpperCase()}</div>
      <div style={nameStyle}>{productInfo.name}</div>
      <Price actualPrice={selectedStyle.original_price} salePrice={selectedStyle.sale_price} />
      <StyleSelector />
      <SKUSelector />
    </div>
  );
};

export default ProductSelect;
