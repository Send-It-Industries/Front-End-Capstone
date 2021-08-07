import React, { useContext } from 'react';
import AppContext from '../../Contexts/AppContext';

const Sort = () => {
  const {
    productId, reviews, fetchReviews, currentSort, setCurrentSort,
  } = useContext(AppContext);
  const reviewCount = reviews.length;
  const selectHandler = (e) => {
    e.preventDefault();
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
      <select name="sortType" value={currentSort} onChange={selectHandler}>
        <option value="relevant"> relevant</option>
        <option value="newest"> recent </option>
        <option value="helpful"> helpful</option>
      </select>
    </div>
  );
};

export default Sort;
