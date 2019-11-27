import React, { createRef, useState, useEffect } from 'react';
import useLoadBar from '../hooks/loadBar/useLoadBar';

const loadingBarContainer = {
  height: '20px',
  width: '200px',
  backgroundColor: 'white',
  borderRadius: '10px',
};
const loadingProgressBar = {
  height: '100%',
  backgroundColor: 'yellow',
  textAlign: 'center',
  boxShadow: 'inset 0 0 5px #000',
};

const LoadBar = ({ progress }) => {
  const [loadprogress, setLoadProgress] = useState(0);

  useEffect(() => {
    setLoadProgress(progress);
  }, [progress]);

  const addWidthProperty = (status) => {
    return {
      width: status + '%',
    };
  };
  
  const successCase = (status) => {
    if (status === 100) {
      return {
        backgroundColor: 'green',
      }
    }
    return;
  };
  
  return (
    <div className='load-bar'>
      <div className='bar-container' style={loadingBarContainer}>
      <div className='progress-bar' style={{...loadingProgressBar, ...addWidthProperty(loadprogress), ...successCase(loadprogress)}}>{loadprogress}%</div>
      </div>
    </div>
  );
};

export default LoadBar;