import React, { useState, useEffect } from 'react';

const useRefOuterSize = (ref) => {
  const [outerDimensions, setOuterDimensions] = useState({ height: 0, width: 0 });
  useEffect(() => {
    if (ref.current) {
      const { width, height } = ref.current.getBoundingClientRect();
      setOuterDimensions({ width, height });
    }
  }, [ref]);
  return outerDimensions;
};

export default useRefOuterSize;
