import React from 'react';
import ReviewList from './review-list/review-list';
import Breakdown from './breakdown/summary-breakdown';

const ReviewSummary = function () {
  return (
    <div
      style={{
        maxWidth: '85%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <Breakdown />
      <ReviewList />
    </div>
  );
};

export default ReviewSummary;
