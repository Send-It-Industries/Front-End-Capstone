/* eslint-disable react/prop-types */
import React, { useContext, useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';
import AppContext from '../Contexts/AppContext';

const Stars = ({ starDimension, starSpacing }) => {
  const [starCount, setStarCount] = useState(0);
  const { avgReview } = useContext(AppContext);
  // console.log (avgReview.average);
  const avgStars = ((Math.round((avgReview.average) * 4) / 4).toFixed(2));
  // console.log (avgStars);

  useEffect(() => {
    if (avgReview.average) {
      setStarCount(parseFloat(avgStars));
    }
  }, [avgStars]);

  const starSpace = Math.round(starDimension / 3);

  return (
    <StarRatings
      rating={starCount}
      starDimension={starDimension}
      starSpacing={starSpacing || `${starSpace}px`}
    />
  );
};

export default Stars;
