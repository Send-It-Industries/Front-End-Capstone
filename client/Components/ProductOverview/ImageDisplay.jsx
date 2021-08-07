import React, { useState, useContext } from 'react';
import ImageCarousel from './ImageCarousel';
import MagnifyingGlass from './MagnifyingGlass';

import AppContext from '../Contexts/AppContext';

const ImageDisplay = () => {
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
    backgroundColor: 'black',
    // height: '100%',
    overflow: 'hidden',
    /* alignSelf: 'center'; */
    display: 'grid',
    gridTemplateRows: '100%',
    gridTemplateColumns: '100%',
    alignItems: 'center',
    justifyItems: 'center',
    border: '2px solid red',
    padding: '0 2%',
  };

  // const [expanded, setExpanded] = useState(false);

  const {
    selectedStyle,
    displayImageIndex,
    setDisplayImageIndex,
    expanded,
    toggleExpandedView,
  } = useContext(AppContext);

  const imageStyle = {
    // style img tag
    maxWidth: '100%',
    maxHeight: '100%',
    // alignSelf: 'center',

    // commented out - a
    // gridColumn: '1 / 2',
    // gridRow: '1 / 2',

    // commented out - b
    /* minHeight: '80%', */
    boxSizing: 'border-box',

    // style the background image
    width: ' 100%',
    // height: '100%',
    padding: 'calc(100% / (32/9)) 0',
    backgroundImage: `url(${selectedStyle.photos[displayImageIndex].url})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const [hovering, setHovering] = useState(false);

  const toggleHover = () => (
    setHovering((isHovering) => (!isHovering))
  );

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
    <div id="imageDisplay" style={imageDisplayStyle} onMouseOut={() => (setHovering(false))}>

      <button type="button" onClick={decrementDisplayImageIndex} style={{ ...btnStyle, left: '25%' }}>decrement</button>

      <div id="productImage" style={imageStyle} onMouseEnter={() => (setHovering(true))} onMouseOut={()=> (setHovering(false))} />
      {/* <img id="productImage" src={selectedStyle.photos[displayImageIndex].url} alt="Product Display" style={imageStyle} onMouseEnter={() => (setHovering(true))} onMouseOut={()=> (setHovering(false))}/> */}

      <button type="button" onClick={toggleExpandedView} style={{ ...btnStyle, ...enhanceBtnStyle }}>enhance</button>

      <button type="button" onClick={incrementDisplayImageIndex} style={{ ...btnStyle, left: '90%' }}>increment</button>

      <ImageCarousel displayCount={7} />

      {expanded && hovering ? <div onMouseEnter={() => (setHovering(true))}><MagnifyingGlass imageId="productImage" imageUrl={selectedStyle.photos[displayImageIndex].url} zoom={2.5} /></div> : null}

    </div>
  );
};

export default ImageDisplay;
