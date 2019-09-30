import React from 'react';

import SinglePointMenu from '../map/singlePointMenu';

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
      add={props.addCoordinates}
      remove={props.removeCoordinates}
      edit={props.editCoordinateInfo}
      more={props.accessMoreInformation} 
      species={props.editSpeciesInformation}
      close={props.toggleClose}
      isRemoveActive={props.renderRemove}
    />
  </div>
);

export default InformationWindow;