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
    display: 'grid',
    gridTemplateRows: '100%',
    gridTemplateColumns: '100%',
    alignItems: 'center',
    justifyItems: 'center',
    border: 'none',
    padding: '0 2%',
    cursor: 'default',
  };

  const imageStyle = {
    position: 'absolute',
    maxWidth: '100%',
    maxHeight: '100%',
    boxSizing: 'border-box',
    cursor: expanded ? (zoomed ? 'zoom-out' : 'crosshair') : 'zoom-in',
  };

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

  const handleExpandedClick = (e) => {
    if (zoomed) {
      setZoomed(false);
    }
    toggleExpandedView();
  };

  return (
    <div id="imageDisplay" style={imageDisplayStyle}>

      {/* <div
        role="button"
        onClick={decrementDisplayImageIndex}
        style={{ ...btnStyle, left: '14%' }}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </div> */}

      <img
        id="productImage"
        style={imageStyle}
        onClick={expanded ? toggleZoom : toggleExpandedView}
        src={selectedStyle.photos[displayImageIndex].url}
      />

      {selectedStyle.photos.length > 1 && !zoomed ? (
        <div
          role="button"
          onClick={decrementDisplayImageIndex}
          style={{ ...btnStyle, left: '14%' }}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
      ) : (null)}

      {expanded && zoomed ? <MagnifyingGlass imageId="productImage" imageUrl={selectedStyle.photos[displayImageIndex].url} zoom={2.5} onClick={toggleZoom} /> : null}

      <div
        role="button"
        onClick={handleExpandedClick}
        style={{ ...btnStyle, ...enhanceBtnStyle }}>
        {
          expanded ? (<FontAwesomeIcon icon={faCompress} />) : (<FontAwesomeIcon icon={faExpand} />)
        }
      </div>

      {selectedStyle.photos.length > 1 && !zoomed ? (
        <div
          role="button"
          onClick={incrementDisplayImageIndex}
          style={{ ...btnStyle, right: '5%' }}>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      ) : (null)}

      {!zoomed ? (
        <ImageCarousel displayCount={7} displayimages={!expanded} />
      ) : null}

    </div>
  );
};

export default ImageDisplay;
