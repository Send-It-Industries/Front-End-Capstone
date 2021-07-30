const reviewAvg = (resultsObj) => {
  const twoplesArr = Object.entries(resultsObj);
  // console.log(twoplesArr);
  let count = 0;
  const total = twoplesArr.reduce((acc, current) => {
    const key = parseInt(current[0], 10);
    const val = parseInt(current[1], 10);
    count += val;
    return (acc + (key * val));
  }, 0);
  const average = Number((total / count).toFixed(1));
  // console.log('avg rating: ', total / count);
  return { average, count };
};

export default reviewAvg;
