import React, { useContext, useState, useEffect } from 'react';
import Stars from '../../Helpers/Stars';
import AppContext from '../../Contexts/AppContext';

const AverageRating = () => {
  const { avgReview } = useContext(AppContext);
  // console.log(starData);

  // const avgData = (() => {
  //   if (ratings) {
  //     const sum = (starData[0] + (starData[1] * 2) + (starData[2] * 3)
  //   + (starData[3] * 4) + (starData[4] * 5));
  //     const count = (starData[0] + (starData[1])
  //     + (starData[2]) + (starData[3]) + (starData[4]));
  //     const avg = Number((sum / count).toFixed(1));
  //     return { avg, count };
  //   }
  //   return undefined;
  // })();

  // useEffect(() => {
  //   if (avgData) {
  //     setAvgReview(avgData.avg);
  //   } else {
  //     setAvgReview(0);
  //   }
  // });

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
      <Stars />
    </div>
  );
};

export default AverageRating;
