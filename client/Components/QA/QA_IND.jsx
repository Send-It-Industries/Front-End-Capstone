/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable arrow-body-style */
import React from 'react';
import AddAnswer from './AddAnswer';

const QA_IND = () => {
  return (
    <div>
      {/* Question */}
      {/* Answers */}
        {/* Helpful/Yes Btn */}
            <button type="button">Yes</button>
        <button type="button">Report</button>
        <button type="button">Load More Answers</button>
      
      
      {/* Buttons on side */}
        {/* Helpful/Yes Btn */}
            <button type="button">Yes</button>
        <AddAnswer />
    </div>
  );
};

export default QA_IND;
