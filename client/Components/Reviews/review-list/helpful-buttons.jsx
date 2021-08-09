import React from 'react';
import Helpful from '../../Helpers/Helpful';
import Report from '../../Helpers/Report';

// eslint-disable-next-line react/prop-types
const HelpfulButtons = ({ helpfulness, reviewId }) => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <Helpful
      value={helpfulness}
      component="reviews"
      componentId={reviewId}
      // style={{ marginRight: '0.5rem' }}
    />
    <span style={{ margin: '0 1rem', color: 'rgb(109, 122, 130)' }}> | </span>
    <Report
      value={helpfulness}
      component="reviews"
      componentId={reviewId}
      // style={{ marginLeft: '2rem' }}
    />
  </div>
);

export default HelpfulButtons;
