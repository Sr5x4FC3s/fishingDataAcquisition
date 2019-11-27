import React, { useState, useEffect } from 'react';

const useLoadBar = (callback) => {
  const [percentage, setPercentage] = useState(0);

  const setProgress = (percent) => {
    /* generates smooth bar transitions for asethetics */
    if (percent === 100) {
      let basePercent = 0;
      const interval = setInterval(() => {
        basePercent += 1;
        setPercentage(basePercent);
        if (basePercent === 100) {
          clearInterval(interval);
          setTimeout(() => callback(), 1000);
        };
      }, 100);
    } else {
      let basePercent = 0;
      const interval = setInterval(() => {
        basePercent += 1;
        setPercentage(basePercent);
        if (basePercent === 99) {
          clearInterval(interval);
          console.log('failed to upload');
          setTimeout(() => callback(), 1000);
        };
      }, 100); 
    }
  };

  return {
    percentage,
    setProgress,
  }
};

export default useLoadBar;