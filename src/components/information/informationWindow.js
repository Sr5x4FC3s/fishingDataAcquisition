import React from 'react';

import SinglePointMenu from '../map/singlePointMenu';
import AddCoordinatesForm from '../map/menuOptions/addCoordinatesForm';
import LocationInformationForm from '../map/menuOptions/locationForm';
import SpeciesForm from '../information/speciesInformation';

const styles = {
  width: '45%',
  height: '900px',
  backgroundColor: 'blue',
  float: 'left',
  zIndex: 13,
};

const InformationWindow = (props) => (
  <div style={styles}>
    <SinglePointMenu 
      activeCoordinate={props.activeCoordinate}
      toggle={props.toggleSinglePointMenu}
      toggleHandler={props.toggleHandler} 
      add={props.addCoordinates}
      remove={props.removeCoordinates}
      edit={props.editCoordinateInfo}
      more={props.more} 
      species={props.editSpeciesInformation}
      close={props.toggleClose}
      isRemoveActive={props.renderRemove}
    />
    <AddCoordinatesForm 
      toggleHandler={props.toggleHandler}
      more={props.more} 
    />
    <LocationInformationForm 
      toggleHandler={props.toggleHandler}
    />
    <SpeciesForm
      toggleHandler={props.toggleHandler}
    />
  </div>
);

export default InformationWindow;