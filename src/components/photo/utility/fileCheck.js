export const fileTypeCheck = (file) => {
  const validFileTypes = /([a-zA-Z0-9\s_\\.\-\(\):])+(.jpeg|.jpg|.pdf|.png|.raw)/gi;

  const status = {
    message: 'INVALID',
    validity: false,
  };

  try {
    if (JSON.stringify(file.name).match(validFileTypes)) {
      status.message = 'VALID';
      status.validity = true;
      return status;
    } else {
      status.message = 'CHANGE_TO_PNG_JPG';
      throw error;
    }
  }
  catch (error) {
    console.log(`Please change file type to JPEG, PNG, RAW, or PDF.`);
    return status;
  }
  finally {
    return status;
  }
};
