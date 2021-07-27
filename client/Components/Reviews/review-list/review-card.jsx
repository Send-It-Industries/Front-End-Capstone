import React from 'react';
import HelpfulButtons from './helpful-buttons';
import Stars from '../star-display';

const ReviewCard = function () {
  return (
    <div>
      <Stars />
      <h3>Review Card</h3>
      <HelpfulButtons />
    </div>
  );
};

export default ReviewCard;
