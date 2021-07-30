/* eslint-disable react/prop-types */
import React from 'react';
import HelpfulButtons from './helpful-buttons';
import Stars from '../../Helpers/Stars';

const ReviewCard = ({ review }) => {
  const date = review.date.slice(0, 9);

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
        <span><Stars /></span>
        <span>{date}</span>
      </div>
      <h4>{review.summary}</h4>
      <p>{review.body}</p>
      <div>{review.response}</div>
      <HelpfulButtons />
    </div>
  );
};

export default ReviewCard;
