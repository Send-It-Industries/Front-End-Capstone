/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
import React from 'react';

const Helpful = ({ value }) => {
  return (
    <div>
      Helpful?
      {' '}
      <span
        onClick={() => {
          console.log('click');
        }}
        style={{ textDecorationLine: 'underline', cursor: 'pointer' }}
      >
        Yes
      </span>
      (
      { value }
      )
    </div>
  );
};

export default Helpful;
