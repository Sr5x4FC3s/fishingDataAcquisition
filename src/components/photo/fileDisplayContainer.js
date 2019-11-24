import React from 'react';
import GenericButton from '../header/button';

const styles = {
  backgroundColor: 'white',
};

const FileDisplayContainer = (props) => (
  <div style={styles}>
    {props.images.map(file => (
        <div>
          {file.name}
          <GenericButton 
            action={
              () => {
                props.removeFile(file.name);
              }
            }
            name={'X'}
          />
        </div>
      ))}
  </div>
);

export default FileDisplayContainer;