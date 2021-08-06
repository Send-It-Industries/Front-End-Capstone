import React, { useEffect } from 'react';
import useElementSizeById from '../Helpers/Hooks/useElementSizeById';

const MagnifyingGlass = ({ imageId, imageUrl, zoom }) => {
  const [imageWidth, imageHeight] = useElementSizeById(imageId);

  const magnifyingGlassStyle = {
    position: 'absolute',
    boxSizing: 'border-box',
    border: '2px solid black',
    borderRadius: '50%',
    // cursor: 'none',
    width: 0.1 * imageWidth,
    height: 0.1 * imageWidth,
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: `${imageWidth * zoom}px ${imageHeight * zoom}px`,
  };

  // useEffect(() => {
  //   const borderWidth = 2;Effect

  const moveGlass = (e) => {
    e.preventDefault();
    debugger;

    let currX = e.clientX - window.pageXOffset;
    let currY = e.clientY + window.pageYOffset;

    const { width, height } = e.target.getBoundingClientRect();
    const displayImageWidth = e.target.clientWidth;
    const displayImageHeight = e.target.clientHeight;
    const borderWidth = 2;
    const w = width / 2;
    const h = height / 2;
    // prevent from leaving image
    if (currX - e.offsetX > displayImageWidth - ((0.1 * displayImageWidth) / 2)) {
      currX = displayImageWidth - ((0.1 * displayImageWidth) / 2);
    }
    if (currX < ((0.1 * displayImageWidth) / 2)) {
      currX = ((0.1 * displayImageWidth) / 2);
    }
    if (currY > displayImageHeight - ((0.1 * displayImageHeight) / 2)) {
      currY = displayImageHeight - ((0.1 * displayImageHeight) / 2);
    }
    if (currY < ((0.1 * displayImageHeight) / 2)) {
      currY = ((0.1 * displayImageHeight) / 2);
    }

    const magGlass = document.getElementById('magnifyingGlass');

    if (magGlass) {
      magGlass.style.width = 0.1 * displayImageWidth;
      magGlass.style.height = 0.1 * displayImageWidth;
      magGlass.style.backgroundSize = `${displayImageWidth * zoom}px ${displayImageHeight * zoom}px`;
      magGlass.style.left = `${(currX - (0.1 * displayImageWidth) / 2)}px`;
      magGlass.style.top = `${(currY - (0.1 * displayImageWidth) / 2)}px`;
      magGlass.style.backgroundPosition = `-${(currX * zoom) - w + borderWidth}px -${(currY * zoom) - h + e.offsetY + borderWidth}px`;
    }
  };

  useEffect(() => {
    const image = document.getElementById(imageId);
    image.addEventListener('mousemove', moveGlass);
    image.addEventListener('touchmove', moveGlass);

    // Probably bad practice but made it less laggy when I wasnt removing the event lestener on unmount.
    // Is there a way to memoize this mount and unmount functionality?

    // return (() => {
    //   image.removeEventListener('mousemove', moveGlass);
    //   image.removeEventListener('touchmove', moveGlass);
    // });
  }, []);

  // useCallback(() => {
  //   const sizeChange = {
  //     width: 0.1 * imageWidth,
  //     height: 0.1 * imageWidth,
  //     backgroundSize: `${imageWidth * zoom}px ${imageHeight * zoom}px`,
  //   };
  //   setMagnifyingGlassStyle((prevStyle) => ({ ...prevStyle, ...sizeChange }));
  // }, [imageWidth, imageHeight]);

  return (
    <div id="magnifyingGlass" style={magnifyingGlassStyle} />
  );
};

export default MagnifyingGlass;
