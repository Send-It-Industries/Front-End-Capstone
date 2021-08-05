import { useLayoutEffect, useState } from 'react';

// returns the current window size in an array [width, height]
const useElementSizeById = (elementId) => {
  const [size, setSize] = useState([null, null]);
  useLayoutEffect(() => {
    const updateSize = () => (
      setSize([
        document.getElementById(elementId).clientWidth,
        document.getElementById(elementId).clientHeight,
      ])
    );
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => (window.removeEventListener('resize', updateSize));
  }, []);
  return size;
};

export default useElementSizeById;
