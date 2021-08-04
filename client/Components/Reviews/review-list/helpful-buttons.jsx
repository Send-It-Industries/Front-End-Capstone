import React from 'react';

// eslint-disable-next-line react/prop-types
const HelpfulButtons = ({ helpfulness }) => (
  <div>
    Helpful?
    <button type="button"> Yes </button>
    <div>{`(${helpfulness})`}</div>
    <button type="button"> Report </button>
  </div>
);

export default HelpfulButtons;
