import React from 'react';

import Map from './maps';

const toggledStyle = {
  width: '55%', 
  height:'900px',
  backgroundColor: 'green',
  overflow: 'hidden',
  float: 'right',
};

const untoggledStyle = {
  width: '99%', 
  height:'900px',
  backgroundColor: 'red',
  marginLeft: '.5%',
  marginRight: '.5%',
};

const MapContainer = (props) => (
  props.active ? 
  <div id='map' style={toggledStyle}>
    <Map 
      toggle={props.toggle}
      activeCoordinate={props.activeCoordinate} 
      // retrieveCoordinates={props.retrieveCoordinates}
      getClickedCoordinates={props.getClickedCoordinates}
    />
  </div> : 
  <div id='map' style={untoggledStyle}>
    <Map 
      toggle={props.toggle}
      activeCoordinate={props.activeCoordinate}
      // retrieveCoordinates={props.retrieveCoordinates}
      getClickedCoordinates={props.getClickedCoordinates} 
    />
  </div> 
);

export default MapContainer;