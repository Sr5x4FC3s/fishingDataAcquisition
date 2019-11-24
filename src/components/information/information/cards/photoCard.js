import React from 'react';

const thumbnailStyle = {
  height: '50px',
  widgth: '50px',
};

const PhotoCard = (props) => (
  <div>
    <img style={thumbnailStyle} src={props.url}/>
  </div>
);

export default PhotoCard;