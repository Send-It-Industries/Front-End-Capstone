const StarFilter = (filterObj, reviews) => {
  const filtersArr = Object.entries(filterObj);
  const trues = filtersArr.filter((twople) => twople[1] === true);
  const filterInts = trues.map((twople) => (parseInt(twople[0], 10)));
  const data = (filterInts.map((starCount) => (
    reviews.filter((review) => (review.rating === starCount))
  ))).flat();
  return data;
  // console.log(data);
};

export default StarFilter;
