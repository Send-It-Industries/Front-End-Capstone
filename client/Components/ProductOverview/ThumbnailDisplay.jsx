import React, { useContext } from 'react';

import AppContext from '../Contexts/AppContext';

const ThumbnailDisplay = () => {
  const name = 'ThumbnailDisplay';
  const { selectedStyle, displayImageIndex, setDisplayImageIndex } = useContext(AppContext);
  const selected = { border: '5px solid red' };

  const handleThumbnailClick = (e, newIndex) => (
    setDisplayImageIndex(newIndex)
  );

  return (
    <div>
      <h5>{name}</h5>
      {
      selectedStyle.photos.map(({thumbnail_url}, i) => (
        <img
          style={displayImageIndex === i ? selected : null}
          src={thumbnail_url}
          key={i}
          alt={`Thumbnail ${i} for style id: ${selectedStyle.style_id}`}
          onClick={(e) => (handleThumbnailClick(e, i))}
        />
      ))
    }
    </div>
  );
};

export default ThumbnailDisplay;
