import React, { useContext, useState, useEffect } from 'react';
import Stars from '../../Helpers/Stars';
import AppContext from '../../Contexts/AppContext';

const AverageRating = () => {
  const { reviewMeta } = useContext(AppContext);
  const { ratings } = reviewMeta;
  const [avgReview, setAvgReview] = useState(0);

  const starData = (() => {
    if (ratings) {
      const oneStar = ratings[1] ? parseInt(ratings[1], 10) : 0;
      const twoStar = ratings[2] ? parseInt(ratings[2], 10) : 0;
      const threeStar = ratings[3] ? parseInt(ratings[3], 10) : 0;
      const fourStar = ratings[4] ? parseInt(ratings[4], 10) : 0;
      const fiveStar = ratings[5] ? parseInt(ratings[5], 10) : 0;
      return [
        oneStar, twoStar, threeStar, fourStar, fiveStar,
      ];
    }
    return undefined;
  })();
  console.log(starData);

  const avgData = (() => {
    if (ratings) {
      const sum = (starData[0] + (starData[1] * 2) + (starData[2] * 3)
    + (starData[3] * 4) + (starData[4] * 5));
      const count = (starData[0] + (starData[1])
      + (starData[2]) + (starData[3]) + (starData[4]));
      const avg = Number((sum / count).toFixed(1));
      return { avg, count };
    }
    return undefined;
  })();

  console.log(avgData);

  useEffect(() => {
    if (avgData) {
      setAvgReview(avgData.avg);
    } else {
      setAvgReview(0);
    }
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <div>
        {avgReview}
      </div>
      <Stars stars={avgReview} />
    </div>
  );
};

export default AverageRating;
