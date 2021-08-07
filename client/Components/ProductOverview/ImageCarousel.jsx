import React, { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
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

  const selected = {
    boxShadow: '0px 3px black',
    opacity: '1',
  };

  const carouselStyle = {
    position: 'absolute',
    left: '2%',
    padding: '1.5% 0',
    display: 'grid',
    height: `${10 * selectedStyle.photos.length + (selectedStyle.photos.length > displayCount ? 10 : 0)}%`,
    maxHeight: '80%',
    width: 0.16 * imageCarouselHeight,
    minWidth: '7%',
    // gridTemplateColumns: '12%',
    gridTemplateRows: selectedStyle.photos.length > displayCount ? '3% 89% 3%' : '100%',
    rowGap: '1%',
    justifyItems: 'center',
    // backgroundColor: 'grey',
    // backgroundColor: 'rgba(128,128,128, .0)',
    justifyContent: 'space-evenly',
    // border: '1px solid black',
    border: 'none',
  };

  const carouselImagesStyle = {
    // margin: '5% 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gridRow: selectedStyle.photos.length > displayCount ? '2 / 3' : '1 / 2',
    width: '100%',
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
    height: 0.13 * imageCarouselHeight, // instead of 13% make a fractional based off
    width: 0.13 * imageCarouselHeight, // of length of array if < displayCount
    // width: '100%',
    // height: '50px', // imageCarouselHeight,
    // maxHeight: '100px',
    maxWidth: '100px',
    marginBottom: '2%',
    borderBottom: '5px',
    boxSizing: 'border-box',
    border: '1px solid black',
    opacity: '.5',
  };

  const upArrowBtnStyle = {
    gridRow: '1 / 2',
    opacity: '.7',
  };

  const downArrowBtnStyle = {
    gridRow: '3 / 4',
    opacity: '.7',
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
    selectedStyle.photos.length > 1 ? (
      <div id="thumbnailCarousel" style={carouselStyle}>
        {displayEdges.start ? (
          <div
            role="button"
            style={upArrowBtnStyle}
            onClick={decrementView}>
            <FontAwesomeIcon icon={faAngleUp} />
          </div>) : null}
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
        {displayEdges.end !== (selectedStyle.photos.length) ? (
          <div
            role="button"
            style={downArrowBtnStyle}
            onClick={incrementView}>
            <FontAwesomeIcon icon={faAngleDown} />

          </div>) : null}
      </div>
    ) : (null)
  );
};

export default ImageCarousel;
