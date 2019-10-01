import React, { useState, useEffect } from 'react';

import { Popup } from 'react-map-gl';

const styles = {
  height: '600px',
  width: '600px',
  backgroundColor: 'red',
  zIndex: 11,
};

const LocationInformationForm = (props) => (
  <div>
    <div id="location-information-container">
      <div>Weather Details: </div>
      <div>some drop down or something</div>
      <div>Water Details: </div>
      <div>some drop down or something</div>
      <div>Edit Location / Region / Area: </div>
      <div>create drop down and localization of user, edit place, area, features, etc </div>
      <button onClick={() => props.toggleHandler('species')}>Add Fish Data</button>
    </div>
  </div>
);

export default LocationInformationForm;