import React, { useState, useEffect } from 'react';

import FormWithDropDown from '../../forms/formWithDropDown';
import SaveButton from '../../forms/saveButton';
import GenericButton from '../../header/button';
import DisabledButton from '../../header/disabledButton';
import LocationCard from '../../information/information/cards/locationCard';
import SpeciesInformationCard from '../../information/information/cards/speciesInformationCard';
// import ImageDropZone from '../../photo/dropZone';
// import PhotoContainer from '../../information/information/container/photoContainer';

//test
import ImageDropContainer from '../../information/information/container/imageDropContainer';

import { retrieve } from '../../../../utility/apiUtility';

const AddCoordinateForm = (props) => {
  const [image, setImage] = useState('');
  const [color, setColor] = useState('');
  const [information, setInformation] = useState({});
  const [locationInformation, setLocationInformation] = useState({});
  const [searchStatus, setStatus] = useState({status: false, failedAttempts: 0,});
  const [catchInformation, changeCatchInformation] = useState(null);
  const [uploadedImageList, setImageList] = useState([]);
  const [toggleViewStates, toggleStates] = useState({showImageButton: true, renderFileDrop: false,});

  const captureValue = (event, type) => {
    switch(type) {
      case('COLOR'):
        setColor(event.target.value);
        break;
      case('IMAGE'):
        setImage(event.target.value);
        break;
      case('COORDINATES'):
        setInformation({
          ...information,
          color: color,
          image: image, 
        });
        props.save(information, 'COORDINATES');
        break;
    }
  };

  const fetchInformation = () => {
    retrieve('LOCATION_DATA', props.activeCoordinate)
      .then(result => {
        if (Object.keys(result.data).length > 0) {
          setLocationInformation({
            ...locationInformation,
            name: result.data.locationName,
            photos: result.data.photos,
            misc: result.data.misc,
            catches: result.data.catches,
          });

          setStatus({
            ...searchStatus,
            status: true
          });

          return;
        } else {
          setStatus({
            status: false, 
            failedAttempts: searchStatus.failedAttempts + 1
          });

          return 
        }
      })
      .catch(err => console.log(err));
  };

  const toggle = (information) => {
    changeCatchInformation(information);
    console.log('catch information: ', catchInformation)
  };

  const toggleViews = (type) => {
    switch(type) {
      case('IMAGE_BUTTON'):
        toggleStates({renderFileDrop: toggleViewStates.renderFileDrop, showImageButton: !toggleViewStates.showImageButton});
        break;
      case('FILE_DROP'): 
        toggleStates({showImageButton: toggleViewStates.showImageButton, renderFileDrop: !toggleViewStates.renderFileDrop});
        break;
    }
  };

  const retrieveImages = (imageList) => {
    setImageList(uploadedImageList => [...imageList]);
  };

  //track marker color selections
  //on load, populate all drop down fields before first render 

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

  const markerColorOptions = ['#E74C3C', '#8E44AD', '#3498DB', '#45B39D', '#28B463', '#F1C40F', '#17202A'];
  //create a custom color generator for marker colors

  return (
    <div>
      <FormWithDropDown 
        options={{
          dropDown: true, 
          search: false, 
          textArea: false, 
          submit: false, 
          date: false, 
          time: false, 
        }}
        category={`[Marker Image] Change Marker Color`}
        dropDown={markerColorOptions}
        type={'COLOR'}
        capture={captureValue}
      />        
      <FormWithDropDown 
        options={{
          dropDown: true, 
          search: false, 
          textArea: false, 
          submit: false, 
          date: false, 
          time: false, 
        }}
        category={`[Marker Image] Change Marker Image`}
        dropDown={markerColorOptions}
        type={'IMAGE'}
        capture={captureValue}
      />
      <LocationCard 
        coordinates={props.activeCoordinate}
        locationInfo={locationInformation}
        searchStatus={searchStatus}
        selectCatch={toggle}
      />
      {!catchInformation ?
          null 
        : 
        <SpeciesInformationCard 
          catchInformation={catchInformation}
        />
      }
      <div>ADD CLICKABLE IMAGES OF FISH THAT ARE AVAILABLE IN THE REGION</div>
      <div>ADD A BUTTON THAT ALLOWS USER TO ADD FISH TO THAT LIST OR REMOVE A CUSTOM ENTRY FISH FROM THE LIST</div>
      {!toggleViewStates.renderFileDrop ?         
        <GenericButton 
          action={
            () => {
              props.updateTabState(null, null, props.activeCoordinate);
              toggleViews('FILE_DROP');
            }
          }
          name={'Upload Photo(s)'}
        />
        :
        <ImageDropContainer 
          retrieveImages={retrieveImages}
          component={'location'}
          images={uploadedImageList}
          render={toggleViews}
          renderStatus={toggleViewStates}
        />
      }
      <div id='location-button-container' style={locationContainerStyles}>
        <SaveButton
          save={captureValue}
          type={'COORDINATES'}
          state={information}
        />
        <GenericButton 
          action={
            () => {
              // props.more('COORDINATE_INFO', props.coordinates);
              fetchInformation();
            }
          }
          name={'Location Details'}
        />
        <GenericButton 
          action={
            () => {
              props.toggleHandler('species');
            }
          }
          name={'Add Catch'}
        />
      </div>
    </div>
  )
};

export default AddCoordinateForm;