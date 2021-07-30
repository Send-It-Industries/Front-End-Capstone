import React, { useContext, useState } from 'react';
import Sort from './list-sort';
import ReviewCard from './review-card';
import MoreReviews from './more-reviews';
import AddReview from '../add-review/add-review';
import AppContext from '../../Contexts/AppContext';

const ReviewList = () => {
  const [reviewCount, setReviewCount] = useState(2);
  const { reviews } = useContext(AppContext);

  return (
    <div
      style={{
        width: '50%',
        padding: '5px',
        margin: '5px',
      }}
    >
      <Sort />
      {reviews.slice(0, reviewCount).map(
        (review) => (
          <ReviewCard
            review={review}
            key={review.review_id}
            reviewCount={reviewCount}
            setReviewCount={setReviewCount}
          />
        ),
      )}
      <MoreReviews />
      <AddReview />
    </div>
  );
};

export default ReviewList;
