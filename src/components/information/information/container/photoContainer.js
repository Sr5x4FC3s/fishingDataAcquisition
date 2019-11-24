import React from 'react';
import PhotoCard from '../cards/photoCard';
import GenericButton from '../../../header/button';

const PhotoContainer = (props) => (
  <div>
    {props.photos.map(url => (
      <PhotoCard url={url}/>
    ))}
    <GenericButton 
      action={
        () => {
          props.render('IMAGE_BUTTON');
        }
      }
      name={'Close'}
    />  
  </div>
);

export default PhotoContainer;