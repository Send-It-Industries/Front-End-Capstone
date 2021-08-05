import React from 'react';
import ReviewList from './review-list/review-list';
import Breakdown from './breakdown/summary-breakdown';

const ReviewSummary = () => (
  (
    <div
      style={{
        width: '90vw',
        maxWidth: '1250px',
        maxHeight: '100vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <Breakdown />
      <ReviewList />
    </div>
  )
);

export default ReviewSummary;
