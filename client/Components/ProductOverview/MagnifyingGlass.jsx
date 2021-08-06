import React, { useEffect } from 'react';
import useElementSizeById from '../Helpers/Hooks/useElementSizeById';

const MagnifyingGlass = ({ imageId, imageUrl, zoom }) => {
  const [imageWidth, imageHeight] = useElementSizeById(imageId);

  const magnifyingGlassStyle = {
    position: 'absolute',
    boxSizing: 'border-box',
    border: '2px solid black',
    borderRadius: '50%',
    cursor: 'none',
    width: 0.1 * imageWidth,
    height: 0.1 * imageWidth,
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: `${imageWidth * zoom}px ${imageHeight * zoom}px`,
  };

  const moveGlass = (e) => {
    e.preventDefault();
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;
    const { width, height } = e.target.getBoundingClientRect();
    const posX = (mouseX / width) * 100;
    const posY = (mouseY / height) * 100;
    const magGlass = document.getElementById('magnifyingGlass');

    if (magGlass) {
      magGlass.style.left = `${(mouseX - (0.1 * width) / 2)}px`;
      magGlass.style.top = `${(mouseY - (0.1 * width) / 2)}px`;
      magGlass.style.backgroundPosition = `${posX}% ${posY}%`;
    }
  };

  useEffect(() => {
    const image = document.getElementById(imageId);
    if (!image.onmousemove) {
      image.addEventListener('mousemove', moveGlass);
      image.addEventListener('touchmove', moveGlass);
    }

    // Probably bad practice but made it less laggy when I wasnt removing the event lestener on unmount.
    // Is there a way to memoize this mount and unmount functionality?

    return (() => {
      image.removeEventListener('mousemove', moveGlass);
      image.removeEventListener('touchmove', moveGlass);
    });
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
