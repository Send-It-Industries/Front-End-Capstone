import React, { useContext } from 'react';
import AppContext from '../Contexts/AppContext';
import useElementSizeById from '../Helpers/Hooks/useElementSizeById';

const ThumbnailDisplay = () => {
  const { selectedStyle, displayImageIndex, setDisplayImageIndex } = useContext(AppContext);
  const [carouselWidth, carouselHeight] = useElementSizeById('thumbnailCarousel');

  const selected = { borderBottom: '5px solid red' };

  const thumbnailImageContainerStyle = {
    // width: '100px',
    minHeight: `50px`,
    flex: '1 1 15%',
    objectFit: 'contain',
  };
  const thumbnailCarouselStyle = {

    position: 'absolute',
    left: '0',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '15%',
    minWidth: '50px',
    height: '75%',
    // gridTemplateRows: 'repeat(4, 20%)',
    // rowGap: '10px',
    // alignItems: 'center',
    // justifyItems: 'center',
    // justifyContent: 'space-evenly',
    overflowY: 'hidden',
    // overflowX: 'hidden', /* can remove once i finish carousel */
  };

  const handleThumbnailClick = (e, newIndex) => (
    setDisplayImageIndex(newIndex)
  );

  return (
    <div id="thumbnailCarousel" style={thumbnailCarouselStyle}>
      {
      selectedStyle.photos.map(({ thumbnail_url }, i) => (
        <div style={displayImageIndex === i ? (
          { ...selected, ...thumbnailImageContainerStyle }) : thumbnailImageContainerStyle}
        >
          <img
          style={{ objectFit: 'contain', maxHeight: '100%', maxWidth: '100%' }}
            src={thumbnail_url}
            key={i}
            alt={`${selectedStyle.style_id}`}
            onClick={(e) => (handleThumbnailClick(e, i))}
          />
        </div>
      ))
    }
    </div>
  );
};

export default ThumbnailDisplay;
