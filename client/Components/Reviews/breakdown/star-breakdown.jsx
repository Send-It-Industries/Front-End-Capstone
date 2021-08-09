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

  const starBar = {
    margin: '0.35rem',
    width: '13.5vw',
  };

  // useEffect(() => {
  //   console.log('use effect');
  //   // const filtersArr = Object.entries(filter);
  //   // console.log(filtersArr);
  // }, [filter.count]);

  return (
    <div style={{ width: '20vw', marginTop: '1.5rem' }}>
      {filteredReviews.length ? (
        <button
          type="button"
          tabIndex={0}
          onClick={clearFilters}
          style={{
            width: '6rem',
            height: '1.5rem',
            margin: '0.5rem 0',
            background: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          Clear Filters
        </button>
      ) : null}
      <div
        style={{
          width: '20vw',
          display: 'flex',
          flexDirection: 'row',
          textDecorationLine: 'underline',
          cursor: 'pointer',
          alignContent: 'center',
          // justifyContent: 'flex-start',
          marginTop: '0.75rem',
        }}
        onClick={() => (starClickHandler(5))}
        role="button"
        tabIndex={0}
      >
        <div style={{ width: '4vw' }}>
          5 stars:
        </div>
        <div style={starBar}>
          <ProgressBar percent={percentFiveStar} height="0.52rem" width="100%" radius="0px" fillColor="rgb(109, 122, 130)" margin="0.25rem 0.5rem" />
        </div>
      </div>
      <div
        style={{
          width: '20vw',
          display: 'flex',
          flexDirection: 'row',
          textDecorationLine: 'underline',
          cursor: 'pointer',
          alignContent: 'center',
          marginTop: '0.75rem',
        }}
        onClick={() => (starClickHandler(4))}
        role="button"
        tabIndex={0}
      >
        <div style={{ width: '4vw' }}>
          4 stars:
        </div>
        <div style={starBar}>
          <ProgressBar percent={percentFourStar} height="0.52rem" width="100%" radius="0px" fillColor="rgb(109, 122, 130)" color="rgb(220,220,220)" margin="0.25rem 0.5rem" />
        </div>
      </div>

      <div
        style={{
          width: '20vw',
          display: 'flex',
          flexDirection: 'row',
          textDecorationLine: 'underline',
          cursor: 'pointer',
          alignContent: 'center',
          marginTop: '0.75rem',
        }}
        onClick={() => (starClickHandler(3))}
        role="button"
        tabIndex={0}
      >
        <div style={{ width: '4vw' }}>
          3 stars:
        </div>
        <div style={starBar}>
          <ProgressBar percent={percentThreeStar} height="0.52rem" width="100%" radius="0px" fillColor="rgb(109, 122, 130)" margin="0.25rem 0.5rem" />
        </div>
      </div>

      <div
        style={{
          width: '20vw',
          display: 'flex',
          flexDirection: 'row',
          textDecorationLine: 'underline',
          cursor: 'pointer',
          alignContent: 'center',
          margin: '0.75rem 0',
        }}
        onClick={() => (starClickHandler(2))}
        role="button"
        tabIndex={0}
      >
        <div style={{ width: '4vw' }}>
          2 stars:
        </div>
        <div style={starBar}>
          <ProgressBar percent={percentTwoStar} height="0.52rem" width="100%" radius="0px" fillColor="rgb(109, 122, 130)" margin="0.25rem 0.5rem" />
        </div>
      </div>

      <div
        style={{
          width: '20vw',
          display: 'flex',
          flexDirection: 'row',
          textDecorationLine: 'underline',
          cursor: 'pointer',
          alignContent: 'center',
          marginTop: '0.75rem',
        }}
        onClick={() => (starClickHandler(1))}
        role="button"
        tabIndex={0}
      >
        <div style={{ width: '4vw' }}>
          1 stars:
        </div>
        <div style={starBar}>
          <ProgressBar percent={percentOneStar} height="0.52rem" width="100%" radius="0px" fillColor="rgb(109, 122, 130)" margin="0.25rem 0.5rem" />
        </div>
      </div>
    </div>

  );
};

export default StarBreakdown;
