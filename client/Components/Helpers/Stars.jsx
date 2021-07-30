import React from 'react';

const Stars = (props) => {
  const { stars } = props;
  const name = 'Stars';
  return (
    <>
      {stars}
      {name}
    </>
  );
};

export default Stars;
