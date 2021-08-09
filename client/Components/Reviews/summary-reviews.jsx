import React, { useContext } from 'react';
import ReviewList from './review-list/review-list';
import Breakdown from './breakdown/summary-breakdown';
import AppContext from '../Contexts/AppContext';
import AddReview from './add-review/add-review';

const ReviewSummary = () => {
  const { reviews, reviewMeta } = useContext(AppContext);
  // console.log(reviews);
  return (
    (reviews.length && reviewMeta.product_id)
      ? (
        <div
          id="Reviews"
          style={{
            font: 'roboto',
            width: '80vw',
            maxWidth: '1250px',
            maxHeight: '100vh',
            marginTop: '0.5rem',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Breakdown />
          <ReviewList />
        </div>
      )
      : (
        <div
          id="Reviews"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100vw',
            height: '100vh',
            padding: '5px',
            margin: '5px',
            maxHeight: '700px',
            // overflowY: 'auto',
          }}
        >
          <div style={{
            fontSize: '3rem',
            color: 'rgb(109, 122, 130)',
            fontWeight: 'bold',
            marginBottom: '1rem',
          }}
          >
            Submit the First Review!
          </div>
          <AddReview />
        </div>
      )
  );
};

export default ReviewSummary;
