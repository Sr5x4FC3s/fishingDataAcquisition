import React from 'react';

import SinglePointMenu from '../map/singlePointMenu';
import AddCoordinatesForm from '../map/menuOptions/addCoordinatesForm';
import LocationInformationForm from '../map/menuOptions/locationForm';
import SpeciesInformationDisplay from '../information/speciesInformation';
import IndividualCatchForm from '../forms/individualCatchForm';
import DisplayContainer from './information/container/displayContainer';
import DisplayInformationCard from './information/displayInformationCard';

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
      <SpeciesInformationDisplay
        toggleHandler={props.toggleHandler}
        save={props.save}
      /> : null
    }
    {props.activeInformation.individualInfo ? 
      <IndividualCatchForm
        toggleHandler={props.toggleHandler}
        save={props.save}
      /> : null
    }
    {props.toggleDisplay ? 
      <DisplayContainer 
        activeCoordinate={props.activeCoordinate}
        selectedData={props.selectedData}
        toggleHandler={props.toggleHandler}
        retrieveData={props.retrieveData}
      /> : null
    }
    {props.toggleInfoCard ? 
      <DisplayInformationCard 
      infoCardData={props.infoCardData}
      /> : null
    }
  </div>
);

export default InformationWindow;