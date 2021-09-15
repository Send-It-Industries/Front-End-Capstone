import React, { useState, useContext, useEffect, useLayoutEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import AppContext from '../Contexts/AppContext';
import useElementSizeById from '../Helpers/Hooks/useElementSizeById';

// style needs top, left, width, height, flexDirection,
const ImageCarousel = ({ displayCount }) => {
  const { selectedStyle, displayImageIndex, setDisplayImageIndex, expanded } = useContext(AppContext);

  const [, imageCarouselHeight] = useElementSizeById('thumbnailCarouselImages');

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [displayEdges, setDisplayEdges] = useState({
    start: 0,
    end: displayCount,
  });
  const [imageWidth, setImageWidth] = useState(0.13 * imageCarouselHeight);
  const imageCount = selectedStyle.photos.length > displayCount ? displayCount : selectedStyle.photos.length;

  useEffect(() => {
    const photoCount = selectedStyle.photos.length;
    const end = photoCount < displayCount ? photoCount : displayCount;
    setDisplayEdges(({ start }) => ({ start, end }));
  }, []);

  const updateImageWidth = () => {
    if (document.getElementById('thumbnailCarouselImages')) {
      const { height } = document.getElementById('thumbnailCarouselImages').getBoundingClientRect();
      if (expanded) {
        setImageWidth(0.13 * height);
      } else {
        setImageWidth(0.13 * height);
      }
    }
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', updateImageWidth);
    updateImageWidth();
    return (() => {
      window.removeEventListener('resize', updateImageWidth);
    });
  }, []);

  useLayoutEffect(() => {
    updateImageWidth();
  }, [expanded]);

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

  const expandedCarouselStyle = {
    left: -imageWidth,
    justifyItems: 'left',
    justifyContent: 'start',
    alignItems: 'center',
    height: '40%',
  };

  const carouselStyle = {
    position: 'absolute',
    left: '2%',
    padding: '1.5% 0',
    display: 'grid',
    height: `${10 * selectedStyle.photos.length + (selectedStyle.photos.length > displayCount ? 10 : 0)}%`,
    maxHeight: '80%',
    width: imageWidth,
    minWidth: '7%',
    gridTemplateRows: selectedStyle.photos.length > displayCount ? '3% 89% 3%' : '100%',
    rowGap: '1%',
    justifyItems: 'center',
    justifyContent: 'space-evenly',
    border: 'none',
    cursor: 'default',
  };

  const carouselImagesStyle = {
    gridRow: selectedStyle.photos.length > displayCount ? '2 / 3' : '1 / 2',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '100%',
    gridTemplateRows: `repeat(${imageCount}, ${((100 - (2 * imageCount)) / imageCount)}%)`,
    rowGap: '2%',
    height: '100%',
  };

  const imageStyle = {
    paddingTop: '100%',
    height: 0,
    width: imageWidth,
    maxWidth: '100px',
    maxHeight: '100px',
    marginBottom: '2%',
    borderBottom: '5px',
    boxSizing: 'border-box',
    border: '1px solid black',
    opacity: '.5',
    cursor: 'pointer',
    backgroundSize: 'cover',
    backgroundRepeat: 'none',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'grid',
  };

  const expandedImageStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'rgb(117, 129, 107)',
    display: 'grid',
    placeItems: 'center',
  };

  const upArrowBtnStyle = {
    gridRow: '1 / 2',
    opacity: '.7',
    cursor: 'pointer',
    justifySelf: 'center',
  };

  const downArrowBtnStyle = {
    gridRow: '3 / 4',
    opacity: '.7',
    cursor: 'pointer',
    justifySelf: 'center',
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

  return (
    selectedStyle.photos.length > 1 ? (

      <div id="thumbnailCarousel" style={expanded ? { ...carouselStyle, ...expandedCarouselStyle } : { ...carouselStyle, left: '2%' }}>
        {displayEdges.start ? (
          <div
            role="button"
            style={upArrowBtnStyle}
            onClick={decrementView}>
            <FontAwesomeIcon icon={faAngleUp} />
          </div>
        ) : null}


        <div
          id="thumbnailCarouselImages"
          style={carouselImagesStyle}
        >
          {selectedStyle.photos.slice(displayEdges.start, displayEdges.end)
            .map(({ thumbnail_url }, i) => (
              // <div style={displayImageIndex === i ? (
              //   { ...imagesContainerStyle, ...selected }) : imagesContainerStyle}
              // >
              <div
                style={selectedImageIndex === i ? (
                  {
                    ...imageStyle, ...selected,
                    backgroundImage: `url(${thumbnail_url})`
                  }) : { ...imageStyle, backgroundImage: `url(${thumbnail_url})` }}
                key={i}
                onClick={(e) => (setDisplayImageIndex(i + displayEdges.start))}
              >
                {expanded ? (
                  <div style={expandedImageStyle}>
                    <div>
                      {i + 1 + displayEdges.start }
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
        </div>

        {
          displayEdges.end !== (selectedStyle.photos.length) ? (
            <div
              role="button"
              style={downArrowBtnStyle}
              onClick={incrementView}>
              <FontAwesomeIcon icon={faAngleDown} />

            </div>
          ) : null
        }
      </div>
    ) : (null)
  );
};

export default ImageCarousel;
