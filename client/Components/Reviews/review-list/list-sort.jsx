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
      {`${reviewCount} reviews, sorted by: `}
      <select name="sortType" defaultValue={currentSort}>
        <option value="relevance"> relevance</option>
        <option value="recent"> recent </option>
        <option value="helpful"> helpful</option>
      </select>
    </div>
  );
};

export default Sort;
