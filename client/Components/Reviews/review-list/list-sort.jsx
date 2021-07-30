import React, { useContext } from 'react';
import AppContext from '../../Contexts/AppContext';

const Sort = () => {
  const currentSort = 'relevance';
  const { reviews } = useContext(AppContext);
  const reviewCount = reviews.length;

  return (
    <div
      style={{
        fontWeight: 'bold',
        marginBottom: '10px',
      }}
    >
      {reviewCount}
      {' '}
      reviews, sort:
      {' '}
      {currentSort}
    </div>
  );
};

export default Sort;
