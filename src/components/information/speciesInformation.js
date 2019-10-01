import React from 'react';
import { Popup } from 'react-map-gl';

import SpeciesInputForm from '../forms/speciesInputForm';

export default class SpeciesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infoAvailable: false,
      information: null,
    }
  };

  render() {
    const styles = {
      width: '400px',
      height:'500px',
      zIndex: 12,
    };
    
    return (
      <div>
        <div>
          {!this.state.infoAvailable ? 
            <SpeciesInputForm /> : 
            <div>
              <div>RENDER SPECIES INFORMATION HERE FROM DB</div>
              <button id='edit-info-button' onClick={() => this.props.toggleHandler('species')}>Edit Species Information</button>
            </div>
          }
        </div>
      </div>
    );
  };
};
