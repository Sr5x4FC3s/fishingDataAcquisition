import React, { createRef, useState } from 'react';

const imageDropStyle = {
  width: '100px',
  height: '100px',
  opacity: 0.3,
};

const inputStyle = {
  display: 'none',
};

const ImageDropZone = (props) => {
  const [images, setImage] = useState([]);
  const [highlighted, setHighlights] = useState(false);
  const [filedLoaded, setFileLoaded] = useState(false);
  const refFromCreateRef = createRef();

  const onUpload = (file) => {
    if (file) {
      setImage(images.push(file));
      setFileLoaded(true);
    } else {
      setImage(images.push(refFromCreateRef.current.files[0]));
      setFileLoaded(true);
    }
  };

  const changeHighlightedStyle = (highlightStatus) => {
    let imageDropZoneContainer;

    if (highlightStatus) {
      imageDropZoneContainer = {
        height: '200px',
        width: '200px',
        backgroundColor: 'red',
        cursor: filedLoaded ? 'default' : 'pointer',
      };

      return imageDropZoneContainer;
    } else {
      imageDropZoneContainer = {
        height: '200px',
        width: '200px',
        backgroundColor: 'white',
        cursor: filedLoaded ? 'default' : 'pointer',
      };

      return imageDropZoneContainer;
    }
  };

  const openFileDialog = () => {
    //fix this
    refFromCreateRef.current.click();
  };
  
  const onDragOver = (event) => {
    event.preventDefault();
    setHighlights(true);
  };

  const onDragLeave = (event) => {
    event.preventDefault();
    setHighlights(false);
  };

  const onDrop = (event) => {
    event.preventDefault();
    onUpload(event.dataTransfer.files[0]);
    setFileLoaded(true);
    setHighlights(false);
  };

  return (
    <div>
      <div>Upload Images</div>
      <div 
        className={`Dropzone ${highlighted ? 'Highlight' : ''}`}
        style={changeHighlightedStyle(highlighted)}
        onClick={openFileDialog}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <img 
          src='./images/imageDrop.svg'
          className='icon'
          style={imageDropStyle}/>
        <input
          style={inputStyle}
          ref={refFromCreateRef}
          className='FileInput'
          type='file'
          multiple
          onChange={() => onUpload()}
        />
        <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </div>
    </div>
  );
};

export default ImageDropZone;