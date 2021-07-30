/* eslint-disable react/prop-types */
import React from 'react';

const Characteristic = ({ characteristic }) => {
  const val = (Math.round((characteristic[1].value) * 10) / 10);

  return (
    <>
      <div>
        {characteristic[0]}
      </div>
      <div>
        { val }
      </div>
    </>
  );
};

export default Characteristic;
