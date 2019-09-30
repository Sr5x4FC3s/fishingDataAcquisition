import React from 'react';
import { Marker, Popup } from  'react-map-gl';

export default class SinglePointMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    //temp marker styles 
    const markerStyles = {
      position: 'absolute',
      content: '',
      backgroundColor:'green',
      borderRadius:'50%',
      opacity:'0.5',
      width: '10px',
      height: '10px',
      pointerEvents: 'none',
    };

    const longLatStyles = {
      float: 'left',
    };

    const longLatContainerStyles = {
      width: '100%',
      position: 'relative',
    };

    const buttonContainerStyles = {
      width: '400px',
      position: 'relative',
    };

    const buttonStyles = {
      float: 'left',
      width: '20%',
      height: '33%s',
    };

    return (
      <div>
        {/* <Popup
          latitude={this.props.coordinates[1]}
          longitude={this.props.coordinates[0]}
          closeButton={true}
          closeOnClick={false}
          onClose={() => this.props.close()}
          anchor="top" 
          > */}
            <div>
              <div id='point-menu-coord-container' style={longLatContainerStyles}>
                <div style={longLatStyles}>Longitude: {this.props.activeCoordinate[0]}</div>
                <div style={longLatStyles}>Latitude: {this.props.activeCoordinate[1]}</div>
              </div>
              <div id='point-menu-button-container' style={buttonContainerStyles}>
                {/*render add coordinates button if the coordinates have not been added to the database*/}
                {/*if it has been added, remove the button and render the remove button and vice versa*/}
                {/*can be accomplished with api call to check coordinates and setting a boolean on the active coordinates whether it has been saved or not*/}
                {!this.props.isRemoveActive ? <button style={buttonStyles} onClick={this.props.add}>Add Coordinates</button> : <button style={buttonStyles} onClick={this.props.remove}>Remove Coordinates</button>}
                <button style={buttonStyles} onClick={this.props.edit}>Edit Information</button>
                <button style={buttonStyles} onClick={this.props.species}>Species Information</button>
                <button style={buttonStyles} onClick={() => this.props.more('COORDINATE_INFO', this.props.coordinates)}>More Information</button>
              </div>
            </div>
        {/* </Popup> */}
      </div>
    )
  }
};