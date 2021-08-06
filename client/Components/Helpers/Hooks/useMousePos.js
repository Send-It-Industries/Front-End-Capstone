import { useEffect, useState } from 'react';

const useMousePos = (elementId) => {
  const [x, setX] = useState();
  const [y, setY] = useState();
  // debugger;
  // might actually need use layout effcet.
  useEffect(() => {
    const selectedElement = document.getElementById(elementId);
    const updatePos = (e) => {
      // set x and y based on mouse pos
      // debugger;
      setX(e.clientX);
      setY(e.clientY);
      // console.log(window.event);
    };
    selectedElement.addEventListener('mousemove', updatePos);
    selectedElement.addEventListener('touchmove', updatePos);

    return () => {
      selectedElement.removeEventListener('mousemove', updatePos);
      selectedElement.removeEventListener('touchmove', updatePos);
    };
  }, []);
  return [x, y];
};

export default useMousePos;
