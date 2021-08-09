import React, { useContext } from 'react';
import ImageDisplay from './ImageDisplay';
import ProductSelect from './ProductSelect';
import ProductFeatures from './ProductFeatures';
import AppContext from '../Contexts/AppContext';

// import useMousePos from '../Helpers/Hooks/useMousePos';

const ProductOverview = () => {
  const { productInfo, selectedStyle, expanded } = useContext(AppContext);
  const productOverviewStyle = {
    display: 'grid',
    gridTemplateRows: 'minmax(550px, 55vmin) minmax(125px, 10vmin)',
    gridTemplateColumns: '67% 35%',
    columnGap: '3%',
    rowGap: '7%',
    width: '90vw',
    height: '100%',
    maxHeight: '1250px',
    maxWidth: '1250px',
    /* height: '100%', */
  };

  // const [x, y] = useMousePos('productImage');

  const expandedStyle = {
    gridTemplateColumns: '100%',
    gridTemplateRows: '95vh minmax(125px, 10vmin)',
    maxHeight: '1500px',
  };

  return (
    Object.keys(productInfo).length && Object.keys(selectedStyle).length ? (
      <div
        id="productOverview"
        style={expanded ? (
          { ...productOverviewStyle, ...expandedStyle }) : (
          productOverviewStyle
        )}
      >
        <ImageDisplay />
        {expanded ? null : <ProductSelect />}
        <ProductFeatures />
      </div>
    ) : (<div>Loading...</div>)
  );
};

export default ProductOverview;
