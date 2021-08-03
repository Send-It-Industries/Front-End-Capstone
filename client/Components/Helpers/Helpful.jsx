/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// takes in review/report/question...?

// handlers
// yes
// action

const Helpful = ({ value, component, componentId }) => {
  const [helpfulCount, setHelpfulCount] = useState(value);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setHelpfulCount(helpfulCount);
  }, [helpfulCount]);

  const incrementHelpfulCount = () => {
    setHelpfulCount(helpfulCount + 1);
    setClicked(true);
  };

  const handleUpdate = (component, componentId) => {
    if (component === 'qa') {
      axios.put(`/api/qa/questions/${componentId}/helpful`).then(() => {
        console.log('updated');
      });
    } else if (component === 'answers') {
      axios.put(`/api/qa/answers/${componentId}/helpful`).then(() => {
        console.log('updated');
      });
    } else if (component === 'reviews') {
      axios.put(`/api/reviews/${componentId}/helpful`).then(() => {
        console.log('updated');
      });
      // console.log(component)
    }
    incrementHelpfulCount();
  };
  return (
    <div>
      Helpful?
      {' '}
      <span
        onClick={!clicked ? () => { handleUpdate(component, componentId); } : null}
        style={{ textDecorationLine: 'underline', cursor: 'pointer' }}
      >
        Yes
      </span>
      (
      {helpfulCount}
      )
    </div>
  );
};

export default Helpful;
