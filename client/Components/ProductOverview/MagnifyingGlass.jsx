import React, { useEffect } from 'react';
import useElementSizeById from '../Helpers/Hooks/useElementSizeById';

const MagnifyingGlass = ({ imageId, imageUrl, zoom, onClick }) => {
  const [imageWidth, imageHeight] = useElementSizeById(imageId);

  const magnifyingGlassStyle = {
    position: 'absolute',
    boxSizing: 'border-box',
    border: '2px solid black',
    borderRadius: '50%',
    cursor: 'none',
    width: 0.25 * imageWidth,
    height: 0.25 * imageWidth,
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: `${imageWidth * zoom}px ${imageHeight * zoom}px`,
    display: 'none',
  };

  const moveGlass = (e) => {
    e.preventDefault();
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    const { width, height } = e.target.getBoundingClientRect();
    const posX = (mouseX / width) * 100;
    const posY = (mouseY / height) * 100;
    const magGlass = document.getElementById('magnifyingGlass');

    if (mouseX > width - ((0.25 * width) / 2)) {
      mouseX = width - ((0.25 * width) / 2);
    }
    if (mouseX < ((0.25 * width) / 2)) {
      mouseX = ((0.25 * width) / 2);
    }

    if (mouseY > height - ((0.25 * width) / 2)) {
      mouseY = height - ((0.25 * width) / 2);
    }
    if (mouseY < ((0.25 * width) / 2)) {
      mouseY = ((0.25 * width) / 2);
    }

    if (magGlass) {
      magGlass.style.left = `${(mouseX - (0.25 * width) / 2) + e.target.offsetLeft}px`;
      magGlass.style.top = `${(mouseY - (0.25 * width) / 2) + e.target.offsetTop}px`;
      magGlass.style.backgroundPosition = `${posX}% ${posY}%`;
      magGlass.style.display = 'block';
    }
  };

  useEffect(() => {
    const image = document.getElementById(imageId);
    if (!image.onmousemove) {
      image.addEventListener('mousemove', moveGlass);
      image.addEventListener('touchmove', moveGlass);
    }

    return (() => {
      image.removeEventListener('mousemove', moveGlass);
      image.removeEventListener('touchmove', moveGlass);
    });
  }, []);

  return (
    <div id="magnifyingGlass" style={magnifyingGlassStyle} onClick={onClick}/>
  );
};

export default MagnifyingGlass;
