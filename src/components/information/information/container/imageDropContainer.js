import React from 'react';
import ImageDropZone from '../../../photo/dropZone';
import DisabledButton from '../../../header/disabledButton';
import GenericButton from '../../../header/button';
import PhotoContainer from '../container/photoContainer';

const ImageDropContainer = ({ renderStatus, retrieveImages, component, images, render }) => (
  <div>
    <ImageDropZone 
      retrieveImages={retrieveImages}
      component={component}
    />
    {!images || images.length < 1 ? 
      <DisabledButton 
        name={'Show All Images'}
      />
      :
      renderStatus.showImageButton ? 
      <GenericButton 
        action={
          () => {
            render('IMAGE_BUTTON');
          }
        }
        name={'Show All Images'}
      />
      :
      <PhotoContainer 
        photos={images}
        render={render}
      />
    }
  </div>
);

export default ImageDropContainer;