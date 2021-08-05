import React, { useState, useContext } from 'react';
// import ThumbnailDisplay from './ThumbnailDisplay';
import ImageCarousel from './ImageCarousel';

import AppContext from '../Contexts/AppContext';

const ImageDisplay = () => {
  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    /* minHeight: '80%', */
    alignSelf: 'center',
    // gridColumn: '1 / 2',
    // gridRow: '1 / 2',
  };

  const btnStyle = {
    // gridColumn: '1 / 2',
    // gridRow: '1 / 2',
    position: 'absolute',
    top: '50%',
  };

  const enhanceBtnStyle = {
    top: '5%',
    left: '90%',
  };

  const imageDisplayStyle = {
    objectFit: 'contain',
    position: 'relative',
    gridColumn: '1 / 2',
    gridRow: '1 / 2',
    boxSizing: 'border-box',
    // height: '100%',
    overflow: 'hidden',
    /* alignSelf: 'center'; */
    display: 'grid',
    gridTemplateRows: '100%',
    gridTemplateColumns: '100%',
    alignItems: 'center',
    justifyItems: 'center',
  };

  // const [expanded, setExpanded] = useState(false);

  const {
    selectedStyle,
    displayImageIndex,
    setDisplayImageIndex,
    toggleExpandedView,
  } = useContext(AppContext);

  // const toggleExpandedView = () => (
  //   setExpanded((isExpanded) => (!isExpanded))
  // );

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

      <button type="button" onClick={toggleExpandedView} style={{ ...btnStyle, ...enhanceBtnStyle }}>enhance</button>

      <button type="button" onClick={incrementDisplayImageIndex} style={{ ...btnStyle, left: '90%' }}>increment</button>

      <ImageCarousel displayCount={7} />

    </div>
  );
};

export default ImageDisplay;
