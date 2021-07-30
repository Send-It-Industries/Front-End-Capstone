/* eslint-disable linebreak-style */
import React from 'react';

const Helpful = ({ value }) => (
  <div>
    Helpful?
    {' '}
    <span
      onClick={() => {
        console.log('You are like so helpful rn');
      }}
      style={{ textDecorationLine: 'underline', cursor: 'pointer' }}
    >
      Yes
    </span>
    (
    {value}
    )
  </div>
);

export default Helpful;
