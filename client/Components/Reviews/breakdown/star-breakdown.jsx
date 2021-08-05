/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useState } from 'react';
import ProgressBar from 'react-percent-bar';
import StarFilter from '../../Helpers/StarFilter';
import AppContext from '../../Contexts/AppContext';

const StarBreakdown = () => {
  const {
    reviewMeta, avgReview, filteredReviews, setFilteredReviews, reviews,
  } = useContext(AppContext);
  const { ratings } = reviewMeta;
  const { count } = avgReview;
  const [filter, setFilter] = useState({
    5: false,
    4: false,
    3: false,
    2: false,
    1: false,
  });

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

  const percentFiveStar = Math.round((starData[4] / count) * 100);
  const percentFourStar = Math.round((starData[3] / count) * 100);
  const percentThreeStar = Math.round((starData[2] / count) * 100);
  const percentTwoStar = Math.round((starData[1] / count) * 100);
  const percentOneStar = Math.round((starData[0] / count) * 100);

  const starClickHandler = (e) => {
    const newFilter = filter;
    newFilter[e] = !newFilter[e];
    setFilter(newFilter);
    // console.log(reviews);
    const filterData = StarFilter(newFilter, reviews);
    // console.log('clickhandler', filterData);
    setFilteredReviews(filterData);
  };

  const clearFilters = () => {
    setFilter({
      5: false,
      4: false,
      3: false,
      2: false,
      1: false,
    });
    setFilteredReviews([]);
  };

  // const

  // useEffect(() => {
  //   console.log('use effect');
  //   // const filtersArr = Object.entries(filter);
  //   // console.log(filtersArr);
  // }, [filter.count]);

  return (
    <div>
      {filteredReviews.length ? <btn onClick={clearFilters}> Clear Filters </btn> : null}
      <div onClick={() => (starClickHandler(5))} role="button" tabIndex={0}>
        5 stars:
        <ProgressBar percent={percentFiveStar} height="7px" width="100px" radius="0px" fillColor="rgb(109, 122, 130)" />
      </div>
      <div onClick={() => (starClickHandler(4))} role="button" tabIndex={0}>
        4 stars:
        <ProgressBar percent={percentFourStar} height="7px" width="100px" radius="0px" fillColor="rgb(109, 122, 130)" />
      </div>
      <div onClick={() => (starClickHandler(3))} role="button" tabIndex={0}>
        3 stars:
        <ProgressBar percent={percentThreeStar} height="7px" width="100px" radius="0px" fillColor="rgb(109, 122, 130)" />
      </div>
      <div onClick={() => (starClickHandler(2))} role="button" tabIndex={0}>
        2 stars:
        <ProgressBar percent={percentTwoStar} height="7px" width="100px" radius="0px" fillColor="rgb(109, 122, 130)" />
      </div>
      <div onClick={() => (starClickHandler(1))} role="button" tabIndex={0}>
        1 stars:
        <ProgressBar percent={percentOneStar} height="7px" width="100px" radius="0px" fillColor="rgb(109, 122, 130)" />
      </div>
    </div>
  );
};

export default StarBreakdown;
