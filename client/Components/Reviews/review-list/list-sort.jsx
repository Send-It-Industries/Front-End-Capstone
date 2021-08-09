import React, { useContext } from 'react';
import AppContext from '../../Contexts/AppContext';

const Sort = () => {
  const {
    productId, fetchReviews, currentSort, setCurrentSort, reviewCount,
  } = useContext(AppContext);
  const selectHandler = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    setCurrentSort(e.target.value);
    fetchReviews(productId, e.target.value);
  };

  // const selectStyle = {
  //   position: 'relative',
  //   top: '100%',
  //   backgroundColor: 'white',
  //   border: '1px solid grey',
  //   fontSize: '1rem',
  //   boxShadow: '0px 10px 10px lightgrey',
  // };

  const selectStyle = {
    // appearance: 'none',
    border: 'none',
    borderBottom: 'solid 1px',
    fontWeight: 'bold',
    // textDecorationLine: 'underline',
    cursor: 'pointer',
    alignContent: 'center',
    marginTop: '0.75rem',
    fontFamily: 'Roboto',
    fontSize: '1rem',
  };

  return (
    <div
      style={{
        fontWeight: 'bold',
        marginTop: '2rem',
        marginBottom: '0.75rem',
      }}
    >
      {`${reviewCount} reviews, sorted by: `}
      <select name="sortType" value={currentSort} onChange={selectHandler} style={selectStyle}>
        <option value="relevant">relevance </option>
        <option value="newest"> recent </option>
        <option value="helpful"> helpful </option>
      </select>
    </div>
  );
};

export default Sort;
