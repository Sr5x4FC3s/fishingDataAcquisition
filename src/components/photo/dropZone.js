import React, { createRef, useState, useEffect } from 'react';
import { fetch } from '../../../utility/apiUtility';
import { fileTypeCheck } from './utility/fileCheck';
import FileDisplayContainer from './fileDisplayContainer';
import GenericButton from '../header/button';
import DisabledButton from '../header/disabledButton';
import useLoadBar from '../hooks/loadBar/useLoadBar';

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
  const [urlList, setUrlList] = useState([]);
  const [isLoading, setLoadingStatus] = useState(false);
  const [filesSent, setNumberOfFiles] = useState(0);
  const refFromCreateRef = createRef();
  const { percentage, setProgress } = useLoadBar(() => {
    setLoadingStatus(false);
  });

  const onUpload = (file) => {
    let validFile;

    if (file) {
      validFile = fileTypeCheck(file);
      if (validFile.validity && validFile.message === 'VALID') {
        setImage(images => [...images, file]);
        setFileLoaded(true);
      } else if (!validFile.validity && validFile.message === 'CHANGE_TO_PNG_JPG'){
        //change this to render a message
        console.log('please load jpeg, jpg, or png file types');
      } else {
        //change this to render a message
        console.log('invalid file type');
      }
    } else {
      validFile = fileTypeCheck(refFromCreateRef.current.files[0]);
      if (validFile.validity && validFile.message === 'VALID') {
        setImage(images => [...images, refFromCreateRef.current.files[0]]);
        setFileLoaded(true);
      } else if (!validFile.validity && validFile.message === 'CHANGE_TO_PNG_JPG'){
        //change this to render a message
        console.log('please load jpeg, jpg, or png file types');
      } else {
        //change this to render a message
        console.log('invalid file type');
      }
    }
  };

  const uploadFiles = (files) => {
    const formData = new FormData();

    images.map(file => {
      formData.append('photos', file, file.name);
    });   

    setNumberOfFiles(images.length);

    /* Clears images files and unrenders files */
    setImage([]);
    setLoadingStatus(true);

    const header = {
      'Content-Type': 'multipart/form-data'
    };

    const config = {
      header: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: (progressEvent) => {
        let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setProgress(percentCompleted);
      },
    };

    const convertedCoordinates = `${props.coordinate[0]}*${props.coordinate[1]}`;

    fetch('UPLOAD_IMAGES', formData, config, props.component, convertedCoordinates)
      .then(result => {
        setUrlList(urlList.concat(result.data));
        setNumberOfFiles(0);
        return result;
      })
      .catch(result => {
        setNumberOfFiles(0);
        return result;
      });
  };

  useEffect(() => console.log('files: ', filesSent), [filesSent]);
  
  useEffect(() => {
    props.retrieveImages(urlList);
  }, [urlList]);

  const removeFile = (fileName) => {
    setImage(images.filter(file => file.name !== fileName));
  };

  useEffect(() => {
    if (images.length < 1 && filedLoaded) {
      setFileLoaded(false);
    }
  }, [images]);

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
      <FileDisplayContainer 
        images={images} 
        removeFile={removeFile}
        isLoading={isLoading}
        progress={percentage}
      />
      {filedLoaded ? 
        <GenericButton 
          action={
            () => {
              uploadFiles(images);
            }
          }
          name={'Upload'}
        />
        : 
        <DisabledButton 
          name={'Upload'}
        />
      }
    </div>
  );
};

export default ImageDropZone;