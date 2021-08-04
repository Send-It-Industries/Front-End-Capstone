/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import ProgressBar from 'react-percent-bar';
import AppContext from '../../Contexts/AppContext';

const StarBreakdown = () => {
  const {
    reviewMeta, avgReview, filteredReviews, setFilteredReviews, reviews,
  } = useContext(AppContext);
  const { ratings } = reviewMeta;
  const { count } = avgReview;

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
    return [0, 0, 0, 0, 0];
  })();

  const starClickHandler = () => {
    // console.log(reviews);
  };

  const percentFiveStar = Math.round((starData[4] / count) * 100);
  const percentFourStar = Math.round((starData[3] / count) * 100);
  const percentThreeStar = Math.round((starData[2] / count) * 100);
  const percentTwoStar = Math.round((starData[1] / count) * 100);
  const percentOneStar = Math.round((starData[0] / count) * 100);

  return (
    <div>
      <div name="5" onClick={starClickHandler} role="button" tabIndex={0}>
        5 stars:
        <ProgressBar percent={percentFiveStar} height="7px" width="100px" radius="0px" fillColor="rgb(109, 122, 130)" />
      </div>
      <div name="4">
        4 stars:
        <ProgressBar percent={percentFourStar} height="7px" width="100px" radius="0px" fillColor="rgb(109, 122, 130)" />
      </div>
      <div name="3">
        3 stars:
        <ProgressBar percent={percentThreeStar} height="7px" width="100px" radius="0px" fillColor="rgb(109, 122, 130)" />
      </div>
      <div name="2">
        2 stars:
        <ProgressBar percent={percentTwoStar} height="7px" width="100px" radius="0px" fillColor="rgb(109, 122, 130)" />
      </div>
      <div name="1">
        1 stars:
        <ProgressBar percent={percentOneStar} height="7px" width="100px" radius="0px" fillColor="rgb(109, 122, 130)" />
      </div>
    </div>
  );
};

export default StarBreakdown;
