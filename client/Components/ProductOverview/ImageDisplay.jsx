import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faExpand, faCompress } from '@fortawesome/free-solid-svg-icons';
import ImageCarousel from './ImageCarousel';
import MagnifyingGlass from './MagnifyingGlass';

import AppContext from '../Contexts/AppContext';

const ImageDisplay = () => {
  const {
    selectedStyle,
    displayImageIndex,
    setDisplayImageIndex,
    expanded,
    toggleExpandedView,
  } = useContext(AppContext);

  const [zoomed, setZoomed] = useState(false);

  const btnStyle = {
    // gridColumn: '1 / 2',
    // gridRow: '1 / 2',
    position: 'absolute',
    top: '50%',
    fontSize: '3rem',
    opacity: '.6',
    color: 'black',
    cursor: 'pointer',
  };

  const enhanceBtnStyle = {
    top: '3.5%',
    right: '3.5%',
    fontSize: '2rem',
  };

  const imageDisplayStyle = {
    objectFit: 'contain',
    position: 'relative',
    gridColumn: '1 / 2',
    gridRow: '1 / 2',
    boxSizing: 'border-box',
    backgroundColor: 'rgba(117, 129, 107, .8)',
    // height: '100%',
    overflow: 'hidden',
    /* alignSelf: 'center'; */
    display: 'grid',
    gridTemplateRows: '100%',
    gridTemplateColumns: '100%',
    alignItems: 'center',
    justifyItems: 'center',
    border: 'none',
    padding: '0 2%',
    cursor: expanded ? (zoomed ? 'zoom-out' :'crosshair') : 'zoom-in',
  };

  // const [expanded, setExpanded] = useState(false);

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

  const toggleZoom = () => {
    setZoomed((isZoomed) => (!isZoomed));
  };

  return (
    <div id="imageDisplay" style={imageDisplayStyle} onMouseOut={() => (setHovering(false))}>

      {selectedStyle.photos.length > 1 ? (
        <div
          role="button"
          onClick={decrementDisplayImageIndex}
          style={{ ...btnStyle, left: '14%' }}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
      ) : (null)}

      <div
        id="productImage"
        style={imageStyle}
        onMouseEnter={() => (setHovering(true))}
        onMouseOut={() => (setHovering(false))}
        onClick={expanded ? toggleZoom : toggleExpandedView} />

      {/* <img id="productImage" src={selectedStyle.photos[displayImageIndex].url} alt="Product Display" style={imageStyle} onMouseEnter={() => (setHovering(true))} onMouseOut={()=> (setHovering(false))}/> */}

        <div
          role="button"
          onClick={toggleExpandedView}
          style={{ ...btnStyle, ...enhanceBtnStyle }}>
          {
            expanded ? (<FontAwesomeIcon icon={faCompress} />) : (<FontAwesomeIcon icon={faExpand} />)
          }
        </div>

      {selectedStyle.photos.length > 1 ? (
        <div
          role="button"
          onClick={incrementDisplayImageIndex}
          style={{ ...btnStyle, right: '5%' }}>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      ) : (null)}

      <ImageCarousel displayCount={7} />

      {expanded && hovering && false ? <div onMouseEnter={() => (setHovering(true))}><MagnifyingGlass imageId="productImage" imageUrl={selectedStyle.photos[displayImageIndex].url} zoom={2.5} /></div> : null}

    </div>
  );
};

export default ImageDisplay;
