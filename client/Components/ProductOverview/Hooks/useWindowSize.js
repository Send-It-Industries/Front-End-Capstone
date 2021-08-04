import { useLayoutEffect, useState } from 'react';

// returns the current window size in an array [width, height]
const useElementSizeById = (elementId) => {
  const [size, setSize] = useState([null, null]);
  const target = document.getElementById(elementId);
  useLayoutEffect(() => {
    const updateSize = () => (setSize([target.clientWidth, target.clientHeight]));
    window.addEventListener('resize', updateSize);
    updateSize();
    return window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

export default useElementSizeById;
