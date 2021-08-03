/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable linebreak-style */
import React from 'react';
import axios from 'axios';

const Report = ({ value, component, componentId }) => {
  const handleReport = (component, componentId) => {
    if (component === 'qa') {
      axios.put(`/api/qa/questions/${componentId}/report`).then(() => {
        console.log('reported');
      });
    } else if (component === 'reviews') {
      axios.put(`/api/reviews/${componentId}/report`).then(() => {
        console.log('reported');
      });
    }
  };
  return (
    <div>
      <span
        onClick={() => { handleReport(component, componentId); }}
        style={{ textDecorationLine: 'underline', cursor: 'pointer' }}
      >
        Report
      </span>
    </div>
  );
};

export default Report;
