import React, { useContext, useState } from 'react';
import ThumbnailDisplay from './ThumbnailDisplay';

import AppContext from '../Contexts/AppContext';

const ImageDisplay = () => {
  const name = 'Image Display';

  const { productOverview, selectedStyle, displayImageIndex } = useContext(AppContext);
  // const { styles } = productOverview;

  // State NEEDED
  //   SelectedStyleID
  //   displayImgIndex
  console.log(selectedStyle.photos);
  return (
    <div>
      <h4>{name}</h4>
      <img src={selectedStyle.photos ? selectedStyle.photos[displayImageIndex].url : null} alt="Product Display" />
      <ThumbnailDisplay />
    </div>
  );
};

export default ImageDisplay;
