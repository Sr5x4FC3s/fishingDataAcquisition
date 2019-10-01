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
      activeInformation={props.activeInformation}
      activeCoordinate={props.activeCoordinate}
      toggle={props.toggleSinglePointMenu}
      toggleHandler={props.toggleHandler} 
      more={props.more} 
    />
    {props.activeInformation.edit ? 
      <AddCoordinatesForm 
        toggleHandler={props.toggleHandler}
        more={props.more} 
      /> : null
    }
    {props.activeInformation.locationInfo ? 
      <LocationInformationForm 
        toggleHandler={props.toggleHandler}
      /> : null
    }
    {props.activeInformation.speciesInfo ? 
      <SpeciesForm
        toggleHandler={props.toggleHandler}
      /> : null
    }
  </div>
);

export default InformationWindow;