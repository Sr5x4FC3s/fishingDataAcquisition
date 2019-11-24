export const fileTypeCheck = (file) => {
  const fileTypes = [
    '.jpg',
    '.png',
    '.jpeg',
  ];
  const invalidFileTypes = [
    '.tif',
    '.gif',
    '.raw',
  ];

  const status = {
    message: 'INVALID',
    validity: false,
  };

  try {
    fileTypes.forEach(type => {
      if (JSON.stringify(file.name).match(type)) {
        status.message = 'VALID';
        status.validity = true;
        return status;
      }
    });
  
    invalidFileTypes.forEach(type => {
      if (JSON.stringify(file.name).match(type)) {
        status.message = 'CHANGE_TO_PNG_JPG';
        return status;
      }
    });
  }
  catch (error) {
    console.log(error);
  }
  finally {
    return status;
  }
};
