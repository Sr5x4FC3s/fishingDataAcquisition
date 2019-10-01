import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { fetch } from '../../../utility/apiUtility';
import { key } from '../../../utility/key';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: '100%',
        height: '100%',
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
      }, 
    };
  };

  render() {
    //demo 
    const array = [[37.83, -122.58], [38.83, -122.58], [39.83, -122.58], [40.83, -122.58]];

    //temp marker styles 
    const markerStyles = {
        position: 'absolute',
        content: '',
        backgroundColor:'#FF0000',
        borderRadius:'50%',
        opacity:'0.5',
        width: '10px',
        height: '10px',
        pointerEvents: 'none',
    };

    const currentMarkStyle = {
      position: 'absolute',
      content: '',
      backgroundColor:'green',
      borderRadius:'50%',
      opacity:'0.5',
      width: '10px',
      height: '10px',
      pointerEvents: 'none',
    };

    //SDK access key
    const access_key = key;
  
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken={access_key}
        onClick={(evt) => {
          this.props.getClickedCoordinates(evt.lngLat);
          this.props.toggle();
        }}
      > 
        {this.props.toggle ? 
          <Marker 
            latitude={this.props.activeCoordinate[1]} 
            longitude={this.props.activeCoordinate[0]}
          >
            <div style={currentMarkStyle}></div>
          </Marker>: null
        }
        {array.map(coordinates => (
          <Marker 
            latitude={coordinates[0]} 
            longitude={coordinates[1]}>
            <div style={markerStyles}></div>
          </Marker>
        ))}
      </ReactMapGL>
    );
  }
};