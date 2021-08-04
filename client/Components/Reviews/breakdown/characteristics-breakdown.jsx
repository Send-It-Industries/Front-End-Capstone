import React, { useContext } from 'react';
import Characteristic from './characteristic';
import AppContext from '../../Contexts/AppContext';

const CharacteristicBreakdown = () => {
  const { reviewMeta } = useContext(AppContext);
  const { characteristics } = reviewMeta;
  // console.log(characteristics);
  const characteristicsArr = characteristics ? Object.entries(characteristics) : [];
  return (
    <>
      {characteristicsArr.map(
        (characteristic) => (
          <Characteristic
            characteristic={characteristic}
            key={characteristic[1].id}
          />
        ),
      )}
    </>
  );
};

export default CharacteristicBreakdown;
