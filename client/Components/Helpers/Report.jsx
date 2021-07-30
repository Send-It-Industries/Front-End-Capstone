/* eslint-disable linebreak-style */
import React from 'react';

const Report = () => (
  <div>
    <span
      onClick={() => {
        console.log('Im tElLiNgG!');
      }}
      style={{ textDecorationLine: 'underline', cursor: 'pointer' }}
    >
      Report
    </span>
  </div>
);

export default Report;
