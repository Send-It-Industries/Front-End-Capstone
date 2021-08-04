/* eslint-disable react/prop-types */
import React from 'react';
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
    <div style={{
      borderBottom: '1px solid',
      margin: '10px',
      padding: '5px',
    }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
      >
        <span>
          <Stars
            starDimension="25px"
            starRating={starRating}
          />
        </span>
        <span>{newDate}</span>
      </div>
      <h4>{review.summary}</h4>
      <p style={{
        overflowWrap: 'break-word',
      }}
      >
        {review.body}
      </p>
      {review.recommend ? <div> I recommend this product </div> : null }
      <div>{review.response}</div>
      <HelpfulButtons helpfulness={review.helpfulness} />
    </div>
  );
};

export default ReviewCard;
