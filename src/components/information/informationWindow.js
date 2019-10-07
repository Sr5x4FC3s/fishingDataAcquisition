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
      currentTabState={props.currentTabState}
      save={props.save}
    />
    {props.activeInformation.edit ? 
      <AddCoordinatesForm 
        toggleHandler={props.toggleHandler}
        activeCoordinate={props.activeCoordinate}
        updateTabState={props.updateTabState}
        more={props.more} 
        save={props.save}
      /> : null
    }
    {props.activeInformation.locationInfo ? 
      <LocationInformationForm 
        toggleHandler={props.toggleHandler}
        save={props.save}
      /> : null
    }
    {props.activeInformation.speciesInfo ? 
      <SpeciesForm
        toggleHandler={props.toggleHandler}
        save={props.save}
      /> : null
    }
  </div>
);

export default InformationWindow;