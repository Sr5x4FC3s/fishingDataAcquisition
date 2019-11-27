import React from 'react';
import GenericButton from '../header/button';
import LoadBar from '../loadBars/loadBar';

const styles = {
  backgroundColor: 'white',
  width: '200px', 
};

const FileDisplayContainer = ({ images, removeFile, isLoading, progress }) => (
  <div style={styles}>
    {images.map(file => (
        <div>
          {file.name}
          <GenericButton 
            action={
              () => {
                removeFile(file.name);
              }
            }
            name={'X'}
          />
        </div>
      ))}
      {isLoading ? 
        <LoadBar 
          progress={progress}
        />
        : 
        null
      }
  </div>
);

export default FileDisplayContainer;