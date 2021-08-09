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
        marginTop: '1rem',
      }}
    >
      <div style={{
        fontSize: '3rem', color: 'rgb(109, 122, 130)', fontWeight: 'bold', marginRight: '0.75rem',
      }}
      >
        {avgReview.average}
      </div>
      <div style={{ marginTop: '0.5rem' }}>
        <Stars starDimension="1.25rem" />
      </div>
    </div>
  );
};

export default AverageRating;
