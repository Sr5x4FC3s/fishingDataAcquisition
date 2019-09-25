import React from 'react';

import Map from './maps';

const styles = {
  width: '90%', 
  height:'1200px',
  backgroundColor: 'red',
  marginLeft: '5%',
  marginRight: '5%',
};

const MapContainer = ()=> (
  <div id='map' style={styles}>
    <Map />
  </div>
);

export default MapContainer;