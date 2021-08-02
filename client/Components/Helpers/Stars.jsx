/* eslint-disable react/prop-types */
import React, { useContext, useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';
import AppContext from '../Contexts/AppContext';

const Stars = ({ starRating, starDimension, starSpacing }) => {
  // Prop Notes:
  // All props can be specified in parent element or will default to following
  // example inhereted props: starRating ={4.25} starDimension="30px" starSpacing="2px"
  // defaults: starRating = avgRating for current product, starDimension='25px' starSpacing ='0px'

  const [starCount, setStarCount] = useState(0);
  const { avgReview } = useContext(AppContext);
  // console.log (avgReview.average);
  const avgStars = ((Math.round((avgReview.average) * 4) / 4).toFixed(2));
  // console.log (avgStars);

  const starSize = starDimension || '25px';
  const starSpace = starSpacing || '0px';
  // console.log(starSize, starSpace);

  useEffect(() => {
    if (avgReview.average) {
      setStarCount(parseFloat(avgStars));
    }
  }, [avgStars]);
  return (
    <StarRatings
      rating={starRating || starCount}
      starDimension={starSize}
      starSpacing={starSpace}
    />
  );
};

export default Stars;
