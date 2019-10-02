import React from 'react';

import MapContainer from '../map/mapContainer';
import InformationWindow from '../information/informationWindow';
import HeaderContainer from '../header/headerContainer';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftWindowActive: false,
      current: [-122.41, 37.7577],
      start: [37.7577, -122.41],
      coordinates: [],
      activeTabs: [], // object with true or false value, also data last saved to be rendered onto the window
      activeInformation: {
        edit: false, 
        locationInfo: false, 
        speciesInfo: false, 
        renderRemove: false, 
      }, 
      togglePointMenu: false,
      toggleList: false,
      toggleAllCoordinates: false,
    };

    this.activateWindow = this.activateWindow.bind(this);
    this.deactivateWindow = this.deactivateWindow.bind(this);
    this.retrieveCoordinates = this.retrieveCoordinates.bind(this);

    this.getClickedCoordinates = this.getClickedCoordinates.bind(this);
    this.toggleSinglePointMenu = this.toggleSinglePointMenu.bind(this);
    this.addCoordinates = this.addCoordinates.bind(this);
    this.accessMoreInformation = this.accessMoreInformation.bind(this);
    this.toggleHandler = this.toggleHandler.bind(this);
    this.removeActiveTab = this.removeActiveTab.bind(this);
    this.updateCurrentCoord = this.updateCurrentCoord.bind(this);
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

  removeActiveTab(tab) {
    let activeTabs = this.state.activeTabs;
    let targetIndex = 0;

    /** defaults to true unless tabs are all closed */
    let leftWindowActive = true;

    activeTabs.forEach((item, index) => {
      if (JSON.stringify(item.coordinates) === JSON.stringify(tab)) {
        targetIndex = index;
      };
    });
    activeTabs.splice(targetIndex, 1);

    /** Handles closing of the information window */
    if (activeTabs.length === 0) {
      leftWindowActive = false;
    }

    this.setState({
      activeTabs: activeTabs,
      leftWindowActive: leftWindowActive,
    });
  };

  updateCurrentCoord(coordinate) {
    this.setState({
      current: coordinate,
    });
  };

  retrieveCoordinates(coordindates) {
    console.log(coordindates);
    let activeTabs = this.state.activeTabs;
    //refactor to decorator
    activeTabs.push({info: {state: true, isOpen: true,}, coordinates: coordindates}); // will need to be change to coordinates + corresponding information or use cached data
    this.setState({
      activeTabs: activeTabs,
    }, () => console.log(this.state.activeTabs));
  };

  addCoordinates() {
    let prevCoordinates = this.state.coordinates;
    prevCoordinates.push(this.state.current);
    this.setState({
      coordinates: prevCoordinates,
    }, () => console.log(this.state.coordinates));
    //invoke validate points exist after coords have been added as current coords 

    //remove this and make new method to handle this action and create a small pop up to ask if user would like to edit information
    //when this funtion is invoked adn the coordinates are added, either render this button as green(or a different) color or remove the button so it can't be selected again
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
    const currentCoordinate = coordinates;
    let activeTabs = this.state.activeTabs;
    //refactor to decorator

    activeTabs.push({info: {state: true, isOpen: true,}, coordinates: coordinates}); // will need to be change to coordinates + corresponding information or use cached data

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
    JSON.stringify(coords) !== JSON.stringify(this.state.start) ? this.setState({togglePointMenu: true}) : this.setState({togglePointMenu: !this.state.togglePointMenu});
  };

  toggleHandler(eventType) {
    const activeInformation = this.state.activeInformation;

    // add toggle single point menu to switch and remove above method
    switch(eventType) {
      case('location'):
        activeInformation.locationInfo = true;
        activeInformation.edit = false;
        activeInformation.speciesInfo = false;
        this.setState({
          activeInformation: activeInformation,
        });
        break;
      case('species'):
        activeInformation.locationInfo = false;
        activeInformation.edit = false;
        activeInformation.speciesInfo = true;      
        this.setState({
          activeInformation: activeInformation,
        });
        break;
      case('addCoordinates'):
        activeInformation.renderRemove = !this.state.activeInformation.renderRemove;
        this.setState({
          activeInformation: activeInformation,
        }, () => this.addCoordinates());
        break;
      default:
        activeInformation.locationInfo = false;
        activeInformation.edit = true;
        activeInformation.speciesInfo = false;      
        this.setState({
          activeInformation: activeInformation,
        });
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

    console.log('active Information: ', this.state.activeInformation);
    console.log('active tabs: ', this.state.activeTabs);


    return (
      <div>
        <HeaderContainer 
          activeTabs={this.state.activeTabs} // might not need to pass this
          removeActiveTab={this.removeActiveTab}
          updateCoordinate={this.updateCurrentCoord}
        />
        <div id='map-container' style={styles}>
          {this.state.leftWindowActive ? 
            <InformationWindow 
              activeInformation={this.state.activeInformation}
              activeCoordinate={this.state.current}
              toggle={this.toggleSinglePointMenu} 
              add={this.addCoordinates}
              more={this.accessMoreInformation} 
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