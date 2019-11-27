import React, { useState } from 'react';

const imageStyle = {
  height: window.innerHeight - (window.innerHeight * 0.02),
  width: window.innerWidth - (window.innerWidth * 0.02),
  paddingLeft: '1%',
};

const EnlargedImage = ({ url }) => {
  return (
    <img className='enlarged-image' src={url} style={imageStyle}/>
  )
};

export default EnlargedImage;