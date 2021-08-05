import React from 'react';
import Helpful from '../../Helpers/Helpful';
import Report from '../../Helpers/Report';

// eslint-disable-next-line react/prop-types
const HelpfulButtons = ({ helpfulness, reviewId }) => (
  (
    <>
      <Helpful value={helpfulness} component="reviews" componentId={reviewId} />
      <Report value={helpfulness} component="reviews" componentId={reviewId} />
    </>
  )
);

export default HelpfulButtons;
