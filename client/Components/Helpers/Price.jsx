import React from 'react';

const Price = ({actualPrice, salePrice}) => {
  const name = 'Price';
  return (
    <div>
      <h5>{name}</h5>
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
};

export default Price;
