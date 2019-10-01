import React, { useState, useEffect } from 'react';
import { Marker, Popup } from  'react-map-gl';

import FormWithDropDown from '../../forms/formWithDropDown';

const preMountComponent = () => {
  useEffect(() => console.log('mounted'), setFormValues({menuList: ['item', 'item', 'item', 'item', 'item']}));
  return 'component is supposed;y mounted';
};

const AddCoordinateForm = (props) => {
  const [formValues, setFormValues] = useState(null);
  //track marker color selections
  //on load, populate all drop down fields before first render 
  console.log('values: ', formValues);

  const styles = {
    height: '300px',
    width: '300px',
    zIndex: 11,
  };

  //edit styling settings
  const closeButtonContainer = {
    height: '50px',
    width: '600px',
    backgroundColor: 'green',
  };

  const closeButtonStyles = {
    float: 'right',
  };

  const locationContainerStyles = {
    height: '100px',
    width: '100%',
  };

  //temporary options 
  const options = ['option1', 'option2', 'option2'];

  //change div tag to img tag to house images
  const imagesExample = ['img', 'img', 'img', 'img'];

  return (
    <div>
      <FormWithDropDown 
        options={{dropDown: true, search: false, textArea: false, submit: false, date: false, time: false, }}
        category={`[Marker Image] Change Marker Color`}
        dropDown={[]}
      />        
      <FormWithDropDown 
        options={{dropDown: true, search: false, textArea: false, submit: false, date: false, time: false, }}
        category={`[Marker Image] Change Marker Image`}
        dropDown={[]}
      />      
      <div id='location-button-container' style={locationContainerStyles}>
        <button id='add-location-info' onClick={() => props.toggleHandler('location')}>Add Location Information</button>
        <button id='add-photos'>Upload Photo(s)</button>
      </div>
    </div>
  )
};

export default AddCoordinateForm;