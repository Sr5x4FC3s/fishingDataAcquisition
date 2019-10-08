import React from 'react';

import MapContainer from '../map/mapContainer';
import InformationWindow from '../information/informationWindow';
import HeaderContainer from '../header/headerContainer';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftWindowActive: false,
      currentTabState: {},
      current: [-122.41, 37.7577],
      start: [37.7577, -122.41],
      coordinates: [],
      activeTabs: [], // object with true or false value, also data last saved to be rendered onto the window
      activeInformation: {
        edit: false, 
        locationInfo: false, 
        speciesInfo: false, 
        individualInfo: false,
        renderRemove: false, 
      },
      toggleDisplay: false,
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
    this.updateTabState = this.updateTabState.bind(this);
    this.handleSave = this.handleSave.bind(this);
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

  updateCurrentCoord(coordinates, tabState) {
    let targetTab = this.state.activeTabs.filter((item, index) => {
      if (JSON.stringify(item.coordinates) === JSON.stringify(coordinates)) {
        return item;
      } else {
        return null;
      }
    });

    /** Handles when a tab is closed */
    if (targetTab.length > 0) {
      this.setState({
        current: coordinates,
        currentTabState: targetTab[0].info,
      }, () => console.log('current tab state: ', this.state.currentTabState));
    }
  };

  updateTabState(event, type, activeCoordinates) {
    //refactor to switch eventually to handle all forms and information areas
    
    //refactor targetTab to a utility function since it's used multiple times on this page to search for a specific tab -> make it handle both finding index and also finding the object
    let targetTab = this.state.activeTabs.filter((item, index) => {
      console.log(activeCoordinates, item.coordinates)
      if (JSON.stringify(item.coordinates) === JSON.stringify(activeCoordinates)) {
        return item;
      } else {
        return null;
      }
    });
    console.log('the target: ', targetTab);
  };

  handleSave(formState, formName) {
    let prevTabState = this.state.currentTabState;

    switch(formName) {
      case('SPECIES_INPUT'):
        prevTabState.speciesInput = formState;

        this.setState({
          currentTabState: prevTabState,
        });
        break;
      case('INDIVIDUAL_DETAILS'):
        prevTabState.individualDetails = formState;

        this.setState({
          currentTabState: prevTabState,
        });
        break;
      case('LOCATION'):
        prevTabState.location = formState;

        this.setState({
          currentTabState: prevTabState,
        });
        break;
      case('COORDINATES'):
        prevTabState.coordinates = formState;

        this.setState({
          currentTabState: prevTabState,
        });
        break;
    }
  };

  retrieveCoordinates(coordinates) {
    console.log(coordinates);
    let activeTabs = this.state.activeTabs;
    //refactor to decorator
    activeTabs.push({info: {active: true, isOpen: true, coordinatesAdded: false,}, coordinates: coordindates}); // will need to be change to coordinates + corresponding information or use cached data
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

    activeTabs.push({info: {active: true, isOpen: true, coordinatesAdded: false,}, coordinates: coordinates}); // will need to be change to coordinates + corresponding information or use cached data

    this.setState({
      current: currentCoordinate,
    }, () => {
      this.toggleSinglePointMenu(currentCoordinate);
      // this.props.retrieveCoordinates(currentCoordinate);
      this.setState({
        currentTabState: activeTabs[activeTabs.length - 1].info, 
        activeTabs: activeTabs,
      });
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
        activeInformation.individualInfo = false;    
        this.setState({
          activeInformation: activeInformation,
        });
        break;
      case('species'):
        activeInformation.locationInfo = false;
        activeInformation.edit = false;
        activeInformation.speciesInfo = true;  
        activeInformation.individualInfo = false;        
        this.setState({
          activeInformation: activeInformation,
        });
        break;
      case('addCoordinates'):
        activeInformation.renderRemove = !this.state.activeInformation.renderRemove;
        let currentTabState = this.state.currentTabState;
        currentTabState.coordinatesAdded = !this.state.currentTabState.coordinatesAdded;
        this.setState({
          activeInformation: activeInformation,
          currentTabState: currentTabState,
        }, () => this.addCoordinates());
        break;
      case('individual'):
        activeInformation.locationInfo = false;
        activeInformation.edit = false;
        activeInformation.speciesInfo = false;  
        activeInformation.individualInfo = true;    
        this.setState({
          activeInformation: activeInformation,
        });
        break;
      case('display'): 
        this.setState({
          toggleDisplay: !this.state.toggleDisplay,
        }, () => console.log(this.state.toggleDisplay));
        break;
      default:
        activeInformation.locationInfo = false;
        activeInformation.edit = true;
        activeInformation.speciesInfo = false; 
        activeInformation.individualInfo = false;         
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
    console.log('current tab: ', this.state.currentTabState);


    return (
      <div>
        <HeaderContainer 
          activeTabs={this.state.activeTabs} // might not need to pass this
          removeActiveTab={this.removeActiveTab}
          updateCoordinate={this.updateCurrentCoord}
          activeInformation={this.state.activeInformation}
          currentTabState={this.state.currentTabState}
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
              toggleDisplay={this.state.toggleDisplay}
              currentTabState={this.state.currentTabState}
              updateTabState={this.updateTabState}
              save={this.handleSave}
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