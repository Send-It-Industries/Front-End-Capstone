import React, { useContext } from 'react';
import ThumbnailDisplay from './ThumbnailDisplay';

import AppContext from '../Contexts/AppContext';

const ImageDisplay = () => {
  const name = 'Image Display';

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
    <div>
      <h4>{name}</h4>
      <button type="button" onClick={decrementDisplayImageIndex}>decrement</button>
      <img src={selectedStyle.photos[displayImageIndex].url} alt="Product Display" />
      <button type="button" onClick={incrementDisplayImageIndex}>increment</button>
      <ThumbnailDisplay />
    </div>
  );
};

export default ImageDisplay;
