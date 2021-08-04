import React from 'react';
import PropTypes from 'prop-types';

const Price = ({ actualPrice, salePrice }) => (
  <div>
    {
      salePrice ? (
        <div>
          {`${salePrice} `}
          <s>{actualPrice}</s>
        </div>
      ) : (
        <div>{actualPrice}</div>
      )
    }
  </div>
);

Price.propTypes = {
  actualPrice: PropTypes.string.isRequired,
  salePrice: PropTypes.string,
};
Price.defaultProps = {
  salePrice: null,
};

export default Price;
