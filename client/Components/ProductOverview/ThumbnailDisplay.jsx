import React, { useContext } from 'react';

import AppContext from '../Contexts/AppContext';

const ThumbnailDisplay = () => {
  const name = 'ThumbnailDisplay';
  const { selectedStyle, displayImageIndex } = useContext(AppContext);
  const selected = { border: '5px solid red' };
  return (
    <div>
      <h5>{name}</h5>
      {
      selectedStyle.photos.map(({thumbnail_url}, i) => (
        <img style={displayImageIndex === i ? selected : null} src={thumbnail_url} key={i} alt={`Thumbnail ${i} for style id: ${selectedStyle.style_id}`} />
      ))
    }
    </div>
  );
};

export default ThumbnailDisplay;
