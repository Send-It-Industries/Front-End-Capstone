/* eslint-disable react/prop-types */
import React from 'react';

const MoreReviews = ({ setReviewCount, reviewCount }) => (
  <button
    type="button"
    onClick={() => { setReviewCount(reviewCount + 2); }}
  >
    More Reviews
  </button>
);

export default MoreReviews;
