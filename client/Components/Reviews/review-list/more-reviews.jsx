/* eslint-disable react/prop-types */
import React from 'react';

const MoreReviews = ({ setReviewCount, reviewCount }) => (
  <button
    type="button"
    onClick={() => { setReviewCount(reviewCount + 2); }}
    style={{
      width: '10rem',
      height: '3.5rem',
      margin: '0.5rem 0.85rem',
      background: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      fontSize: '1.25rem',
      color: 'rgb(109, 122, 130)',
      // fontWeight: 'bold',
    }}
  >
    More Reviews
  </button>
);

export default MoreReviews;
