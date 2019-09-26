import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { fetch } from '../../../utility/apiUtility';
import { key } from '../../../utility/key';

import SinglePointMenu from './singlePointMenu';
import AddCoordinatesForm from './menuOptions/addCoordinatesForm';
import LocationInformationForm from './menuOptions/locationForm';
import SpeciesForm from './speciesInformation';

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
      current: null,
      start: [37.7577, -122.41],
      coordinates: [],
      toggleEdit: false,
      toggleLocInfoEdit: false, 
      togglePointMenu: false,
      toggleList: false,
      toggleAllCoordinates: false,
      renderRemove: false,
      toggleSpeciesInfo: false,
    };

    this.getClickedCoordinates = this.getClickedCoordinates.bind(this);
    this.toggleSinglePointMenu = this.toggleSinglePointMenu.bind(this);
    this.toggleClose = this.toggleClose.bind(this);
    this.addCoordinates = this.addCoordinates.bind(this);
    this.accessMoreInformation = this.accessMoreInformation.bind(this);
    this.editCoordinateInfo = this.editCoordinateInfo.bind(this);
    this.untoggleEditCoordinates = this.untoggleEditCoordinates.bind(this);
    this.editLocationInfo = this.editLocationInfo.bind(this);
    this.untoggleEditLocation = this.untoggleEditLocation.bind(this);
    this.removeCoordinates = this.removeCoordinates.bind(this);
    this.editSpeciesInformation = this.editSpeciesInformation.bind(this);
    this.untoggleSpeciesInformation = this.untoggleSpeciesInformation.bind(this);
  };

  validatePointsExist(coordinatePair) {

  };

  addCoordinates() {
    let prevCoordinates = this.state.coordinates;
    prevCoordinates.push(this.state.current);
    this.setState({
      coordinates: prevCoordinates,
      renderRemove: true,
    });
    //invoke validate points exist after coords have been added as current coords 

    //remove this and make new method to handle this action and create a small pop up to ask if user would like to edit information
    //when this funtion is invoked adn the coordinates are added, either render this button as green(or a different) color or remove the button so it can't be selected again
  };

  editCoordinateInfo() {
    this.setState({
      toggleEdit: !this.state.toggleEdit,
    });

    //refactor and combine editCoordinateInfo and untoggleEditCoordinates to reduce redundancy 
  };

  untoggleEditCoordinates() {
    this.setState({
      toggleEdit: false, 
    });
  };

  editLocationInfo() {
    this.setState({
      toggleLocInfoEdit: !this.state.toggleLocInfoEdit,
    });
  };

  untoggleEditLocation() {
    this.setState({
      toggleLocInfoEdit: false,
    });
  };

  removeCoordinates() {
    this.setState({
      renderRemove: false,
      // remove the all state that is associatd with the removed coordinates - update db 
    })
  };

  accessMoreInformation(type, data) {
    // API call and grab information 
    let test = fetch(type, data).then(result => {
      console.log(result.data);
      return result.data;
    }).catch(err => {
      console.log('error: ', err);
      throw err;
    })
  };

  getClickedCoordinates(evt) {
    const currentCoordinate = evt.lngLat;
    this.setState({
      current: currentCoordinate,
    }, () => this.toggleSinglePointMenu(currentCoordinate));
  };

  //toggle menu for a single point when map is clicked 
  toggleSinglePointMenu(coords) {
    JSON.stringify(coords) !== JSON.stringify(this.state.start) ? this.setState({togglePointMenu: true}) : this.setState({togglePointMenu: !this.state.togglePointMenu});
  };

  toggleClose() {
    //can refactor this to close all things depends on which component needs to be closed

    this.setState({
      togglePointMenu: false,
    })
  };

  editSpeciesInformation() {
    //refactor
    this.setState({
      toggleSpeciesInfo: !this.state.toggleSpeciesInfo,
    });
  };

  untoggleSpeciesInformation() {
    //refactor
    this.setState({
      toggleSpeciesInfo: false,
    });
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

    //SDK access key
    const access_key = key;
  
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken={access_key}
        onClick={(evt) => {
          this.getClickedCoordinates(evt);
          this.props.toggle();
        }}
      > 
        {!this.state.togglePointMenu ? null  : 
          <SinglePointMenu 
            coordinates={this.state.current} 
            toggle={this.toggleSinglePointMenu} 
            add={this.addCoordinates}
            remove={this.removeCoordinates}
            edit={this.editCoordinateInfo}
            more={this.accessMoreInformation} 
            species={this.editSpeciesInformation}
            close={this.toggleClose}
            isRemoveActive={this.state.renderRemove}/>
        }
        {!this.state.toggleEdit ? null :
          <AddCoordinatesForm 
            coordinates={this.state.current}
            toggle={this.editCoordinateInfo}
            toggleLoc={this.editLocationInfo}
            close={this.untoggleEditCoordinates}/>
        }
        {!this.state.toggleLocInfoEdit ? null :
          <LocationInformationForm 
            coordinates={this.state.current}
            toggleSpecies={this.editSpeciesInformation}
            close={this.untoggleEditLocation}/>
        }
        {!this.state.toggleSpeciesInfo ? null : 
          <SpeciesForm
            coordinates={this.state.current}
            close={this.untoggleSpeciesInformation}
          />
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