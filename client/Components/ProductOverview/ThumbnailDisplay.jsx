import React, { useContext } from 'react';

import AppContext from '../Contexts/AppContext';

const ThumbnailDisplay = () => {
  const { selectedStyle, displayImageIndex, setDisplayImageIndex } = useContext(AppContext);
  const selected = { border: '5px solid red' };

  const thumbnailImageStyle = {
    width: '95%',
    height: '95%',
  };
  const thumbnailCarouselStyle = {
    position: 'absolute',
    left: '0',
    display: 'grid',
    width: '15%',
    gridTemplateRows: 'repeat(4, 20%)',
    maxHeight: '100%',
    rowGap: '10px',
    alignItems: 'center',
    justifyItems: 'center',
    justifyContent: 'space-evenly',
    overflow: 'scroll',
    overflowX: 'hidden', /* can remove once i finish carousel */
  };

  const handleThumbnailClick = (e, newIndex) => (
    setDisplayImageIndex(newIndex)
  );

  return (
    <div id="thumbnailCarousel" style={thumbnailCarouselStyle}>
      {
      selectedStyle.photos.map(({thumbnail_url}, i) => (
        <img
          style={displayImageIndex === i ? {...selected, ...thumbnailImageStyle } : thumbnailImageStyle}
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
