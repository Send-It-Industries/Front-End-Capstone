import React, { useContext } from 'react';
import AppContext from '../Contexts/AppContext';

const Stars = () => {
  const { avgReview } = useContext(AppContext);
  // console.log (avgReview.average);
  const avgStars = ((Math.round((avgReview.average) * 4) / 4).toFixed(2));
  // console.log (avgStars);
  const name = 'Stars';
  return (
    <>
      {avgStars}
      {name}
    </>
  );
};

export default Stars;
