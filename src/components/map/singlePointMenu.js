import React from 'react';
import { Marker, Popup } from  'react-map-gl';

export default class SinglePointMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderRemove: false, 
    };
    this.switchButtons = this.switchButtons.bind(this);
  }

  switchButtons() {
    this.setState({
      renderRemove: !this.state.renderRemove,
    });
  };

  render() {
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
        <div>
          <div id='point-menu-coord-container' style={longLatContainerStyles}>
            <div style={longLatStyles}>Longitude: {this.props.activeCoordinate[0]}</div>
            <div style={longLatStyles}>Latitude: {this.props.activeCoordinate[1]}</div>
          </div>
          <div id='point-menu-button-container' style={buttonContainerStyles}>
            {/*render add coordinates button if the coordinates have not been added to the database*/}
            {/*if it has been added, remove the button and render the remove button and vice versa*/}
            {/*can be accomplished with api call to check coordinates and setting a boolean on the active coordinates whether it has been saved or not*/}
            {!this.props.currentTabState.coordinatesAdded ? 
              <button 
                style={buttonStyles} 
                onClick={() => {
                  this.props.toggleHandler('addCoordinates');
                  this.switchButtons();
                }}
              >
                Add Coordinates
              </button> 
              : 
              <div>
                <button 
                  style={buttonStyles} 
                  onClick={() => {
                    this.props.toggleHandler('removeCoordinates');
                    this.switchButtons();
                  }}
                >
                  Remove Coordinates
                </button>
                <button style={buttonStyles} onClick={() => this.props.toggleHandler()}>Location Information</button>
              </div>
            }
            <button style={buttonStyles} onClick={() => this.props.toggleHandler('species')}>Species Index</button>
          </div>
        </div>
      </div>
    )
  }
};