/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import HelpfulButtons from './helpful-buttons';
import Stars from '../../Helpers/Stars';

const ReviewCard = ({ review }) => {
  const date = review.date.slice(0, 10);
  const newDate = (() => {
    const monthsArr = ['placeholder', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dateArr = date.split('-');
    const month = (parseInt(dateArr[1], 10));
    const result = `${monthsArr[month]} ${dateArr[2]}, ${dateArr[0]}`;
    return result;
  })();
  // console.log(review);

  const starRating = review.rating || 0;

  return (
    <div
      style={{
        borderBottom: '1px solid',
        margin: '10px',
        padding: '5px',
        width: '90%',
      }}
      data-testid="reviewCard"
    >
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
      >
        <span>
          <Stars
            starDimension="1.25rem"
            starRating={starRating}
          />
        </span>
        <div>
          <span style={{ fontWeight: 'lighter', marginRight: '0.5rem' }}>
            {`Review by ${review.reviewer_name},`}
          </span>
          <span style={{ fontWeight: 'lighter' }}>
            {`on ${newDate}`}
          </span>
        </div>
      </div>
      <h4>{review.summary}</h4>
      <p style={{
        overflowWrap: 'break-word',
      }}
      >
        {review.body}
      </p>
      {review.recommend
        ? (
          <div>
            <span>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span> I recommend this product </span>
          </div>
        )
        : null }
      <div>{review.response}</div>
      {/* {review.photos[0] ? <div>{review.photos[0].url}</div> : null} */}
      <HelpfulButtons helpfulness={review.helpfulness} reviewId={review.review_id} />
    </div>
  );
};

export default ReviewCard;
