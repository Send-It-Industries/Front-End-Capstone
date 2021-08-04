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
    width: '80%',
    height: '7px',
    backgroundColor: 'rgb(109, 122, 130)',

  };
  const pointStyle = {
    width: '8%',
    marginLeft: `${displayPercent * 0.8}%`,
    transform: 'translate(-5px, 7px)',
  };

  // console.log(adjectives);
  return (
    <div>
      <div>
        {characteristic[0]}
      </div>
      <div className="ArrowPointer" style={pointStyle}>▾ </div>
      <div className="FillBar" style={emptyBar} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '80%',
          height: '14px',
          fontSize: '8px',
          marginBottom: '3px',
        }}
      >
        <div>
          {adjectives[0]}
        </div>
        <div>
          {adjectives[1]}
        </div>
        <div>
          {adjectives[2]}
        </div>
      </div>
    </div>
  );
};

export default Characteristic;
