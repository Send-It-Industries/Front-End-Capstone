import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import useElementSizeById from '../Helpers/Hooks/useElementSizeById';
import AppContext from '../Contexts/AppContext';

const ProductFeatures = () => {
  const { productInfo } = useContext(AppContext);
  const [featuresWidth] = useElementSizeById('productFeatures');
  const productFeaturesStyle = {
    width: '90%',
    gridColumn: '1 / 3',
    gridRow: '2 / 3',
    justifySelf: 'center',
    display: 'grid',
    gridTemplateRows: '30% 70%',
    gridTemplateColumns: '75% 25%',
  };
  const sloganStyle = {
    gridColumn: '1 / 2',
    gridRow: '1 / 2',
    fontSize: '1.3rem',
    fontWeight: 'bold',
  };
  const descriptionStyle = {
    gridColumn: '1 / 2',
    gridRow: '2 / 3',
    paddingRight: 0.1 * featuresWidth,
    fontSize: '.8rem',
    color: 'dark-grey',
  };
  const featuresStyle = {
    gridColumn: '2 / 3',
    gridRow: '1 / 3',
    borderLeft: '1px solid grey',
    paddingLeft: '10%',
    fontSize: '1rem',
  };
  return (
    <div id="extraProductInfo" style={productFeaturesStyle}>
      <div style={sloganStyle}>{productInfo.slogan}</div>
      <p style={descriptionStyle}>{productInfo.description}</p>
      <div id="productFeatures" style={featuresStyle}>
        {
          productInfo.features.map(({ feature, value }) => (
            <div>
              <span style={{ color: 'green' }}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span>
                {` ${feature}${value ? ` - ${value}` : ''}`}
              </span>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ProductFeatures;
