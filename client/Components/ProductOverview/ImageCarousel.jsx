import React, { useState, useContext, useEffect } from 'react';
import AppContext from '../Contexts/AppContext';
import useElementSizeById from '../Helpers/Hooks/useElementSizeById';

// style needs top, left, width, height, flexDirection,
const ImageCarousel = ({ displayCount }) => {
  const { selectedStyle, displayImageIndex, setDisplayImageIndex } = useContext(AppContext);

  const [, imageCarouselHeight] = useElementSizeById('thumbnailCarouselImages');

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [displayEdges, setDisplayEdges] = useState({
    start: 0,
    end: displayCount,
  });

  useEffect(() => {
    const photoCount = selectedStyle.photos.length;
    const end = photoCount < displayCount ? photoCount : displayCount;
    setDisplayEdges(({ start }) => ({ start, end }));
  }, []);

  useEffect(() => {
    if (displayImageIndex < displayEdges.start) {
      setDisplayEdges({
        start: displayImageIndex,
        end: displayImageIndex + displayCount,
      });
    }
    if (displayImageIndex >= displayEdges.end) {
      setDisplayEdges({
        start: displayImageIndex - displayCount + 1,
        end: displayImageIndex + 1,
      });
    }
    setSelectedImageIndex(displayImageIndex - displayEdges.start);
  }, [displayImageIndex]);

  useEffect(() => {
    if (displayImageIndex < displayEdges.start) {
      setDisplayImageIndex(displayEdges.start);
    }
    if (displayImageIndex >= displayEdges.end) {
      setDisplayImageIndex(displayEdges.end - 1);
    }
    setSelectedImageIndex(displayImageIndex - displayEdges.start);
  }, [displayEdges]);

  const selected = { borderBottom: '5px solid red' };

  const carouselStyle = {
    position: 'absolute',
    left: '0',
    display: 'grid',
    height: '100%',
    width: '12%',
    // gridTemplateColumns: '12%',
    gridTemplateRows: '10% 80% 10%',
    justifyItems: 'center',
  };

  const carouselImagesStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    // alignItems: 'center',
    // gridTemplateRows: `repeat(${displayEdges.end}, auto)`,
    // height: '100%',
    // width: '100%',
  };

  // const imagesContainerStyle = {
  //   minHeight: '50px',
  //   flex: '0 1 10%',
  //   objectFit: 'contain',
  //   // boxSizing: 'border-box',
  //   // borderBottom: '5px',
  //   marginBottom: '5px',
  //   borderBottom: '5px',
  // };

  const imageStyle = {
    flex: '0 1 12%',
    objectFit: 'cover',
    height: '12%',
    width: 0.12 * imageCarouselHeight,
    // width: '100%',
    // height: '50px', // imageCarouselHeight,
    // maxHeight: '100px',
    maxWidth: '100px',
    marginBottom: '2%',
    borderBottom: '5px',
    boxSizing: 'border-box',
  };

  const incrementView = () => {
    setDisplayEdges((prevEdges) => (
      {
        start: prevEdges.start + 1,
        end: prevEdges.end + 1,
      }
    ));
  };

  const decrementView = () => {
    setDisplayEdges((prevEdges) => (
      {
        start: prevEdges.start - 1,
        end: prevEdges.end - 1,
      }
    ));
  };

  // isSelected = (i) => {
  //   return
  // };

  return (
    <div id="thumbnailCarousel" style={carouselStyle}>
      {displayEdges.start ? <button type="button" onClick={decrementView}>up</button> : <div> </div>}
      <div id="thumbnailCarouselImages" style={carouselImagesStyle}>
        {selectedStyle.photos.slice(displayEdges.start, displayEdges.end)
          .map(({ thumbnail_url }, i) => (
            // <div style={displayImageIndex === i ? (
            //   { ...imagesContainerStyle, ...selected }) : imagesContainerStyle}
            // >
            <img
              style={selectedImageIndex === i ? (
                { ...imageStyle, ...selected }) : imageStyle}
              src={thumbnail_url}
              key={i}
              alt={`${selectedStyle.style_id}`}
              onClick={(e) => (setDisplayImageIndex(i + displayEdges.start))}
            />
            // </div>
          ))}
      </div>
      {displayEdges.end !== (selectedStyle.photos.length) ? <button type="button" onClick={incrementView}>down</button> : <div> </div>}
    </div>
  );
};

export default ImageCarousel;
