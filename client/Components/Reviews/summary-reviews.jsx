import React, { useContext } from 'react';
import ReviewList from './review-list/review-list';
import Breakdown from './breakdown/summary-breakdown';
import AppContext from '../Contexts/AppContext';

const ReviewSummary = () => {
  const { reviews, reviewMeta } = useContext(AppContext);
  // console.log(reviews);
  return (
    (reviews.length && reviewMeta.product_id)
      ? (
        <div
          id="Reviews"
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
      : <div> Loading... </div>
  );
};

export default ReviewSummary;
