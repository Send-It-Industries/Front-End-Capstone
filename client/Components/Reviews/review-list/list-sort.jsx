import React, { useContext, useState } from 'react';
import AppContext from '../../Contexts/AppContext';

const Sort = () => {
  const [currentSort, setCurrentSort] = useState('relevant');
  const { productId, reviews, fetchReviews } = useContext(AppContext);
  const reviewCount = reviews.length;
  const selectHandler = (e) => {
    // console.log(e.target.value);
    setCurrentSort(e.target.value);
    fetchReviews(productId, e.target.value);
  };

  return (
    <div
      style={{
        fontWeight: 'bold',
        marginBottom: '10px',
      }}
    >
      {`${reviewCount} reviews, sorted by: `}
      <select name="sortType" defaultValue={currentSort} onChange={selectHandler}>
        <option value="relevant"> relevant</option>
        <option value="newest"> recent </option>
        <option value="helpful"> helpful</option>
      </select>
    </div>
  );
};

export default Sort;
