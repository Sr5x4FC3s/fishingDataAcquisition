import React, { useState, useEffect } from 'react';
import Modal from '../../../modals/modal';
import useModal from '../../../hooks/useModal';

const thumbnailStyle = {
  height: '50px',
  widgth: '50px',
};

const PhotoCard = ({ url }) => {
  const { toggle, toggleModal } = useModal(); 

  return (
    <div onClick={toggleModal}>
      <img style={thumbnailStyle} src={url}/>
      {toggle ? 
        <Modal 
          type={'ENLARGE_IMAGE'}
          action1={toggleModal}
          url={url}
        /> 
        :
         null
      }
    </div>
  )
};

export default PhotoCard;