import React from 'react';
import ReactDOM from 'react-dom';
import EnlargedImage from '../photo/photoDisplay';

const backdropStyle= {
  width: window.innerWidth,
  height: window.innerHeight + (window.innerHeight * 0.03),
  zIndex: 20,
  backgroundColor: 'black',
  position: 'absolute',
  opacity: 0.7,
};

const buttonContainerStyle = {
  position: 'relative',
};

const Modal = ({ type, action1, url }) => (
  ReactDOM.createPortal(
    <div className='modal-backdrop' style={backdropStyle}>
      <div className='modal'>
        <div className='button-container' style={buttonContainerStyle}>
          <button className='close-image-button' onClick={action1}>&times;</button>
        </div>
        <div className='image-container'>
          {type === 'ENLARGE_IMAGE' ? 
            <EnlargedImage 
              url={url}
            /> 
            : 
            null
          }
        </div>
      </div>
    </div>,
  document.body)
);

export default Modal;