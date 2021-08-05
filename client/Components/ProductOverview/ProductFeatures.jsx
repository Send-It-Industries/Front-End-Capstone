import React, { useContext } from 'react';
import useElementSizeById from '../Helpers/Hooks/useElementSizeById';
import AppContext from '../Contexts/AppContext';

const ProductFeatures = () => {
  const { productInfo } = useContext(AppContext);
  const [featuresWidth] = useElementSizeById('productFeatures');
  const productFeaturesStyle = {
    width: '80%',
    gridColumn: '1 / 3',
    gridRow: '2 / 3',
    justifySelf: 'center',
    display: 'grid',
    gridTemplateRows: '20% 80%',
    gridTemplateColumns: '70% 30%',
  };
  const sloganStyle = {
    gridColumn: '1 / 2',
    gridRow: '1 / 2',
  };
  const descriptionStyle = {
    gridColumn: '1 / 2',
    gridRow: '2 / 3',
    paddingRight: 0.1 * featuresWidth,
  };
  const featuresStyle = {
    gridColumn: '2 / 3',
    gridRow: '1 / 3',
    borderLeft: '1px solid black',
    paddingLeft: '10%',
  };
  return (
    <div id="extraProductInfo" style={productFeaturesStyle}>
      <div style={sloganStyle}><b>{productInfo.slogan}</b></div>
      <p style={descriptionStyle}>{productInfo.description}</p>
      <div id="productFeatures" style={featuresStyle}>
        {
          productInfo.features.map(({ feature, value }) => (
            <div>
              {`${feature}${value ? ` - ${value}` : ''}`}
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ProductFeatures;
