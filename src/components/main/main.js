import React from 'react';

import MapContainer from '../map/mapContainer';
import InformationWindow from '../information/informationWindow';
import HeaderContainer from '../header/headerContainer';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftWindowActive: false,
      activeTabs: [], // object with true or false value, also data last saved to be rendered onto the window
      // current: null,
      current: [-122.41, 37.7577],
      start: [37.7577, -122.41],
      coordinates: [],
      activeInformation: {
        edit: false, 
        locationInfo: false, 
        speciesInfo: false, 
      }, 
      toggleEdit: false,
      toggleLocInfoEdit: false, 
      togglePointMenu: false,
      toggleList: false,
      toggleAllCoordinates: false,
      renderRemove: false,
      toggleSpeciesInfo: false,
    };

    this.activateWindow = this.activateWindow.bind(this);
    this.deactivateWindow = this.deactivateWindow.bind(this);
    this.retrieveCoordinates = this.retrieveCoordinates.bind(this);

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
    this.toggleHandler = this.toggleHandler.bind(this);
  }

  activateWindow() {
    this.setState({
      leftWindowActive: true,
    });
  };

  deactivateWindow() {
    this.setState({
      leftWindowActive: false, 
    });
  };

  retrieveCoordinates(coordindates) {
    console.log(coordindates);
    let activeTabs = this.state.activeTabs;
    //refactor to decorator
    activeTabs.push({info: 'options', coordinates: coordindates}); // will need to be change to coordinates + corresponding information or use cached data
    this.setState({
      activeTabs: activeTabs,
    }, () => console.log(this.state.activeTabs));
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

  getClickedCoordinates(coordinates) {
    // const currentCoordinate = evt.lngLat;
    const currentCoordinate = coordinates;
    let activeTabs = this.state.activeTabs;
    //refactor to decorator
    activeTabs.push({info: 'options', coordinates: coordinates}); // will need to be change to coordinates + corresponding information or use cached data

    this.setState({
      current: currentCoordinate,
    }, () => {
      this.toggleSinglePointMenu(currentCoordinate);
      // this.props.retrieveCoordinates(currentCoordinate);
      this.setState({
        activeTabs: activeTabs,
      }, () => console.log(this.state.activeTabs));
    });
  };

  //toggle menu for a single point when map is clicked 
  toggleSinglePointMenu(coords) {
    console.log('cords: ', coords)
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

  toggleHandler(eventType) {
    const activeInformation = this.state.activeInformation;

    switch(eventType) {
      case('location'):
        activeInformation.locationInfo = true;
        activeInformation.edit = false;
        activeInformation.speciesInfo = false;
        this.setState({
          activeInformation: activeInformation,
        })
        break;
      case('species'):
      activeInformation.locationInfo = false;
      activeInformation.edit = false;
      activeInformation.speciesInfo = true;      
        this.setState({
          activeInformation: activeInformation,
        })
        break;
      default:
      activeInformation.locationInfo = false;
      activeInformation.edit = true;
      activeInformation.speciesInfo = false;      
        this.setState({
          activeInformation: activeInformation,
        })
    }
  };

  render() {
    const styles = {
      width: '1665px', //change based on width of the browser that is in use
      // height: '1800px', //change height based on the needs of the screen == change based on the height of the browser that is in use 
      paddingTop: '2%',
      paddingBottom: '3%',
      backgroundColor: 'green',
    };

    console.log(this.state.activeInformation)

    return (
      <div>
        <HeaderContainer activeTabs={this.state.activeTabs}/>
        <div id='map-container' style={styles}>
          {this.state.leftWindowActive ? 
            <InformationWindow 
              activeInformation={this.state.activeInformation}
              activeCoordinate={this.state.current}
              toggle={this.toggleSinglePointMenu} 
              add={this.addCoordinates}
              remove={this.removeCoordinates}
              edit={this.editCoordinateInfo}
              more={this.accessMoreInformation} 
              species={this.editSpeciesInformation}
              close={this.toggleClose}
              isRemoveActive={this.state.renderRemove}
              toggleHandler={this.toggleHandler}
            /> : null
          }
          <MapContainer 
            active={this.state.leftWindowActive} 
            toggle={this.activateWindow} 
            activeCoordinate={this.state.current}
            // retrieveCoordinates={this.retrieveCoordinates}
            getClickedCoordinates={this.getClickedCoordinates}
          />
        </div>
      </div>
    )
  }
};