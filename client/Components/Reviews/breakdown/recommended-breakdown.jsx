import React, { useContext } from 'react';
import AppContext from '../../Contexts/AppContext';

const Recommended = () => {
  const { reviewMeta } = useContext(AppContext);
  const { recommended } = reviewMeta;
  // console.log(recommended);
  const percentRec = (() => {
    if (recommended) {
      const yes = parseInt(recommended.true, 10);
      const no = parseInt(recommended.false, 10);
      const total = yes + no;
      return Math.round((yes / total) * 100);
    }
    return 0;
  })();

  return (
    <div style={{
      width: '100%',
      marginTop: '0.5rem',
    }}
    >
      {
      `${percentRec}% of reviews recommend this product`
      }
    </div>
  );
};

export default Recommended;
