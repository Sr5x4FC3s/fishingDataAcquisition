import React, { useState } from 'react';

const useModal = () => {
  const [toggle, setStatus] = useState(false);

  const toggleModal = () => {
    setStatus(!toggle);
  };

  return {
    toggle,
    toggleModal,
  }
};

export default useModal;