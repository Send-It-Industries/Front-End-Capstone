import React from 'react';
import ReviewList from './review-list/review-list';
import MoreReviews from './more-reviews';
import Breakdown from './breakdown/summary-breakdown';
import AddReview from './add-review/add-review';

const ReviewSummary = function () {
  return (
    <div>
      <Breakdown />
      <ReviewList />
      <MoreReviews />
      <AddReview />
    </div>
  );
};

export default ReviewSummary;
