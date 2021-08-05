/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Report = ({ value, component, componentId }) => {
  const [reported, setReported] = useState('Report');
  const [clicked, setClicked] = useState(false);

  const handleReport = (component, componentId) => {
    if (component === 'qa') {
      axios.put(`/api/qa/questions/${componentId}/report`).then(() => {
      });
    } else if (component === 'reviews') {
      axios.put(`/api/reviews/${componentId}/report`).then(() => {
      });
    }
    setClicked(true);
    setReported('Reported');
  };
  return (
    <div>
      <span
        onClick={!clicked ? () => { handleReport(component, componentId); } : null}
        style={{ textDecorationLine: 'underline', cursor: 'pointer' }}
      >
        { reported }
      </span>
    </div>
  );
};

export default Report;
