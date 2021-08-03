/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable linebreak-style */
import React from 'react';
import axios from 'axios';

// takes in review/report/question...?

// handlers
// yes
// action

const Helpful = ({ value, component, componentId }) => {
  const handleUpdate = (component, componentId) => {
    if (component === 'qa') {
      axios.put(`/api/qa/questions/${componentId}/helpful`).then(() => {
        console.log('updated');
      });
    } else if (component === 'reviews') {
      axios.put(`/api/reviews/${componentId}/helpful`).then(() => {
        console.log('updated');
      });
    }
    // console.log(component)
  };
  return (
    <div>
      Helpful?
      {' '}
      <span
        onClick={() => { handleUpdate(component, componentId); }}
        // onClick={() => { console.log(component, componentId) }}
        style={{ textDecorationLine: 'underline', cursor: 'pointer' }}
      >
        Yes
      </span>
      (
      {value}
      )
    </div>
  );
};

export default Helpful;
