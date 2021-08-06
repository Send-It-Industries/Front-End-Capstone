/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import axios from 'axios';

const Helpful = ({ value, component, componentId }) => {
  const [helpfulCount, setHelpfulCount] = useState(value);
  const [clicked, setClicked] = useState(false);

  const handleUpdate = (component, componentId) => {
    if (component === 'qa') {
      axios.put(`/api/qa/questions/${componentId}/helpful`).then(() => {
      });
    } else if (component === 'answers') {
      axios.put(`/api/qa/answers/${componentId}/helpful`).then(() => {
      });
    } else if (component === 'reviews') {
      axios.put(`/api/reviews/${componentId}/helpful`).then(() => {
      });
    }
    setHelpfulCount(helpfulCount + 1);
    setClicked(true);
  };
  return (
    <div>
      Helpful?
      {' '}
      <span
        onClick={!clicked ? () => { handleUpdate(component, componentId); } : null}
        style={{ textDecorationLine: 'underline', cursor: 'pointer' }}
      >
        Yes&nbsp;
      </span>
      (
      {helpfulCount}
      )
    </div>
  );
};

export default Helpful;
