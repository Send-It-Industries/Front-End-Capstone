/* eslint-disable react/prop-types */
import React from 'react';

const Characteristic = ({ characteristic }) => {
  const val = (Math.round((characteristic[1].value) * 10) / 10);
  // console.log(characteristic);
  // console.log(val);
  const displayPercent = val * 20;
  // console.log(val, displayPercent);

  const adjectives = (() => {
    if (characteristic[0] === 'Size') { return ['Too Small', 'Perfect', 'Too Big']; }
    if (characteristic[0] === 'Width') { return ['Too Narrow', 'Perfect', 'Too Wide']; }
    if (characteristic[0] === 'Comfort') { return ['Uncomfortable', 'As Expected', 'Perfect']; }
    if (characteristic[0] === 'Quality') { return ['Poor', 'As Expected', 'Perfect']; }
    if (characteristic[0] === 'Length') { return ['Runs Short', 'Perfect', 'Runs Long']; }
    if (characteristic[0] === 'Fit') { return ['Runs Tight', 'Perfect', 'Runs Loose']; }
    return ['', '', ''];
  })();
  const emptyBar = {
    height: '0.52rem',
    width: '100%',
    // width: '80%',
    // height: '7px',
    backgroundColor: 'rgb(109, 122, 130)',
    // backgroundColor: 'rgb(203, 211, 227)',

  };
  const pointStyle = {
    fontSize: '1.5rem',
    width: '8%',
    marginLeft: `${displayPercent}%`,
    // marginLeft: '0%',
    marginTop: '-1.25rem',
    transform: 'translate(-0.5rem, 1.1rem) scaleY(1.75)',
    // color: 'rgb(203, 211, 227)',
  };

  // console.log(adjectives);
  return (
    <div style={{ width: '18vw' }}>
      <div style={{ marginTop: '1rem' }}>
        {characteristic[0]}
      </div>
      <div className="ArrowPointer" style={pointStyle}>▾ </div>
      <div className="FillBar" style={emptyBar} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          height: '1rem',
          fontSize: '0.75rem',
          margin: '0.6rem 0',
        }}
      >
        <div style={{ width: '4vw' }}>
          {adjectives[0]}
        </div>
        <div width={{ width: '4vw' }}>
          {adjectives[1]}
        </div>
        <div width={{ width: '4vw' }}>
          {adjectives[2]}
        </div>
      </div>
    </div>
  );
};

export default Characteristic;
