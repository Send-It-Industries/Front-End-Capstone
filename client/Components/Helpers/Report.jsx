/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
import React from 'react';

const Report = () => {
  return (
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
};

export default Report;
