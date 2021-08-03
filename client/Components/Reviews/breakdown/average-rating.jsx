import React, { useContext } from 'react';
import Stars from '../../Helpers/Stars';
import AppContext from '../../Contexts/AppContext';

const AverageRating = () => {
  const { avgReview } = useContext(AppContext);
  // console.log(starData);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <div>
        {avgReview.average}
      </div>
      <Stars starDimension="15px" />
    </div>
  );
};

export default AverageRating;
