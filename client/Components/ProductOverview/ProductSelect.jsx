import React, { useContext } from 'react';
import Stars from '../Helpers/Stars';
import Price from '../Helpers/Price';
import StyleSelector from './StyleSelector';
import SKUSelector from './SKUSelector';

import AppContext from '../Contexts/AppContext';

const ProductSelect = () => {
  const { productInfo, selectedStyle, reviewCount } = useContext(AppContext);

  const productSelectStyle = {
    gridColumn: '2 / 3',
    gridRow: '1 / 2',
    overflow: 'visible', /* can remove once finish carousel */
    display: 'grid',
    gridTemplateColumns: '100%',
    gridTemplateRows: 'repeat(4, auto) 45% 25%',
    padding: '3% 0',
  };

  const nameStyle = {
    fontSize: '2.5rem',
  };

  return (
    <div id="ProductSelect" style={productSelectStyle} data-testid="productSelect">
      <div style={{ textWrap: 'nowrap'}}>
        <span style={{ textWrap: 'nowrap' }}>
          <Stars />
        </span>
        <span style={{ fontSize: '.7rem', color: 'grey',whiteSpace: 'nowrap', cursor: 'pointer', }}
          onMouseEnter={(e) => { e.target.style.color = 'blue'; }}
          onMouseOut={(e) => { e.target.style.color = 'grey'; }}
          onClick={(e) => {document.getElementById("Reviews").scrollIntoView({behavior: 'smooth'});
        }}
        >
          {` Read all [ ${reviewCount} ] reviews`}
        </span>
      </div>
      <div>{productInfo.category.toUpperCase()}</div>
      <div style={nameStyle}><b>{productInfo.name}</b></div>
      <Price actualPrice={selectedStyle.original_price} salePrice={selectedStyle.sale_price} />
      <StyleSelector />
      <SKUSelector />
    </div>
  );
};

export default ProductSelect;
