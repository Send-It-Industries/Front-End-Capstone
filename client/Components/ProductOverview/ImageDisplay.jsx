import React, { useContext } from 'react';
import ThumbnailDisplay from './ThumbnailDisplay';

import AppContext from '../Contexts/AppContext';

const ImageDisplay = () => {
  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    /* minHeight: '80%', */
    alignSelf: 'center',
    gridColumn: '1 / 2',
    gridRow: '1 / 2',
  };

  const btnStyle = {
    gridColumn: '1 / 2',
    gridRow: '1 / 2',
    position: 'absolute',
  };

  const imageDisplayStyle = {
    position: 'relative',
    gridColumn: '1 / 2',
    gridRow: '1 / 2',
    boxSizing: 'border-box',
    height: '100%',
    overflow: 'hidden',
    /* alignSelf: 'center'; */
    display: 'grid',
    gridTemplateRows: '100%',
    gridTemplateColumns: '100%',
    alignItems: 'center',
    justifyItems: 'center',
  };

  const {
    selectedStyle,
    displayImageIndex,
    setDisplayImageIndex,
  } = useContext(AppContext);

  const incrementDisplayImageIndex = () => (
    setDisplayImageIndex((prevIndex) => (
      (prevIndex + 1) % selectedStyle.photos.length
    ))
  );

  const decrementDisplayImageIndex = () => (
    setDisplayImageIndex((prevIndex) => (
      (prevIndex > 0) ? (prevIndex - 1) : (selectedStyle.photos.length - 1)
    ))
  );

  return (
    <div id="imageDisplay" style={imageDisplayStyle}>
      <button type="button" onClick={decrementDisplayImageIndex} style={{ ...btnStyle, left: '25%' }}>decrement</button>
      <img src={selectedStyle.photos[displayImageIndex].url} alt="Product Display" style={imageStyle} />
      <button type="button" onClick={incrementDisplayImageIndex} style={{ ...btnStyle, left: '90%' }}>increment</button>
      <ThumbnailDisplay />
    </div>
  );
};

export default ImageDisplay;
