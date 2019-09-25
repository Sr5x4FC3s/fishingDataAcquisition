import React, { useState, useEffect } from 'react';

import { Popup } from 'react-map-gl';

// const preMountComponent = () => {
//   useEffect(() => console.log('mounted'), setFormValues({menuList: ['item', 'item', 'item', 'item', 'item']}));
//   return 'component is supposed;y mounted';
// };


const styles = {
  height: '600px',
  width: '600px',
  backgroundColor: 'red',
  zIndex: 11,
};

const LocationInformationForm = (props) => (
  <Popup
    style={styles}
    latitude={props.coordinates[1]}
    longitude={props.coordinates[0]}
    closeButton={true}
    closeOnClick={false}
    onClose={() => props.close()}>
    <div id="location-information-container">
      <div>Weather Details: </div>
      <div>some drop down or something</div>
      <div>Water Details: </div>
      <div>some drop down or something</div>
      <div>Edit Location / Region / Area: </div>
      <div>create drop down and localization of user, edit place, area, features, etc </div>
      <button onClick={props.toggleSpecies}>Add Fish Data</button>
    </div>
  </Popup>
);

export default LocationInformationForm;