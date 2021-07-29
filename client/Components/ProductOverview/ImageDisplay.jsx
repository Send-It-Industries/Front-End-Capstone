import React, { useContext, useState } from 'react';
import ThumbnailDisplay from './ThumbnailDisplay';

import AppContext from '../Contexts/AppContext';

const ImageDisplay = () => {
  const name = 'Image Display';

  const {
    productOverview,
    selectedStyle,
    displayImageIndex,
    setDisplayImageIndex,
  } = useContext(AppContext);
  // const { styles } = productOverview;

  const incrementDisplayImageIndex = (e) => (
    setDisplayImageIndex((prevIndex) => (
      (prevIndex + 1) % selectedStyle.photos.length
    ))
  );

  const decrementDisplayImageIndex = (e) => (
    setDisplayImageIndex((prevIndex) => (
      (prevIndex > 0) ? (prevIndex - 1) : (selectedStyle.photos.length - 1)
    ))
  );
  // State NEEDED
  //   SelectedStyleID
  //   displayImgIndex
  console.log(selectedStyle.photos);
  return (
    <div>
      <h4>{name}</h4>
      <button type="button" onClick={decrementDisplayImageIndex}>decrement</button>
      <img src={selectedStyle.photos ? selectedStyle.photos[displayImageIndex].url : null} alt="Product Display" />
      <button type="button" onClick={incrementDisplayImageIndex}>increment</button>
      <ThumbnailDisplay />
    </div>
  );
};

export default ImageDisplay;
