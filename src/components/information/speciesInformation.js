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
      <Popup
        style={styles}
        latitude={this.props.coordinates[1]}
        longitude={this.props.coordinates[0]}
        closeButton={true}
        closeOnClick={false}
        onClose={() => this.props.close()}
      >
        <div>
          {!this.state.infoAvailable ? <SpeciesInputForm /> : <div><div>RENDER SPECIES INFORMATION HERE FROM DB</div><button id='edit-info-button'>Edit Species Information</button></div>}
        </div>
      </Popup>
    );
  };
};
