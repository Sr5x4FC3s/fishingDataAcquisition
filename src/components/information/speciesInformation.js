import React from 'react';
import { Popup } from 'react-map-gl';

import SpeciesInputForm from '../forms/speciesInputForm';

const styles = {
  width: '400px',
  height:'500px',
  zIndex: 12,
};

const SpeciesInformationDisplay = (props) => (
  <div>
    <div>
      <SpeciesInputForm
        toggleHandler={props.toggleHandler} 
        save={props.save}
      />
    </div>
  </div>
);

export default SpeciesInformationDisplay;