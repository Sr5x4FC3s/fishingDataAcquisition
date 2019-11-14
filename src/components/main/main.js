import React from 'react';

import { fetch } from '../../../utility/apiUtility';

import MapContainer from '../map/mapContainer';
import InformationWindow from '../information/informationWindow';
import HeaderContainer from '../header/headerContainer';
import BannerContainer from '../banners/bannerContainer';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      databaseStatus: null,
      dbBanner: false, 
      dbActivelyLoading: false, 
      dbLoadStatus: {
        status: null,
        failedAttempts: 0, 
      },
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
      selectedDataToDisplay: null,
      toggleDisplay: false,
      toggleInfoCard: false, 
      infoCardData: {}, 
      togglePointMenu: false,
      toggleList: false,
      toggleAllCoordinates: false,
    };

    this.activateWindow = this.activateWindow.bind(this);
    this.deactivateWindow = this.deactivateWindow.bind(this);
    this.getClickedCoordinates = this.getClickedCoordinates.bind(this);
    this.toggleSinglePointMenu = this.toggleSinglePointMenu.bind(this);
    this.addCoordinates = this.addCoordinates.bind(this);
    this.removeCoordinates = this.removeCoordinates.bind(this);
    this.accessMoreInformation = this.accessMoreInformation.bind(this);
    this.toggleHandler = this.toggleHandler.bind(this);
    this.removeActiveTab = this.removeActiveTab.bind(this);
    this.updateCurrentCoord = this.updateCurrentCoord.bind(this);
    this.updateTabState = this.updateTabState.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.retrieveData = this.retrieveData.bind(this);
    this.databaseReset = this.databaseReset.bind(this);
    this.dismissDatabaseStatus = this.dismissDatabaseStatus.bind(this);
  }

  componentDidMount() {
    if (this.state.databaseStatus === null) {
      fetch('DATABASE_STATUS')
        .then(result => {
          this.setState({
            databaseStatus: result.data, 
          });
        })
        .catch(err => {
          console.log(err);
        })

    } else if (this.state.databaseStatus === false) {
      try {
        /** Attempt to reconstruct the database and repopulate it  */
        fetch('DATABASE_INIT')
          .then(result => {
            console.log(result);
          })
          .catch(err => {
            console.log(err);
          });
      }
      catch(err) {
        /** set dbBanner to true if repopulating database fails -- will trigger 
         * rendering of a banner that informs the user that the database is 
         * disconnected or inactive
         */
        this.setState({
          dbBanner: true,
        }, () => console.error(err));
      }
      finally {
        console.log('fill_me');
      }
    } 
    //do a db query to get all setups and update state 
    //when exiting this window, save all entries that were added to the data base 
  };

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
      console.log('active coordinates & item coordinates: ', activeCoordinates, item.coordinates)
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

      /** most input features here will be removed and only a additional notes sections will be available */
        prevTabState.speciesInput = formState;

        this.setState({
          currentTabState: prevTabState,
        }, () => fetch('INSERT_DATA', {type: 'SPECIES', data: this.state.currentTabState.speciesInput}));
        break;
      case('INDIVIDUAL_DETAILS'):
        prevTabState.individualDetails = formState;

        this.setState({
          currentTabState: prevTabState,
        }, () => fetch('INSERT_DATA', {type: 'INDIVIDUAL_DETAILS', data: this.state.currentTabState.individualDetails}));
        break;
      case('LOCATION'):
        prevTabState.location = formState;

        this.setState({
          currentTabState: prevTabState,
        }), () => fetch('INSERT_DATA', {type: 'LOCATION', data: this.state.currentTabState.location});
        break;
      case('COORDINATES'):
        prevTabState.coordinates = formState;

        this.setState({
          currentTabState: prevTabState,
        }, () => fetch('INSERT_DATA', {type: 'COORDINATES', data: this.state.currentTabState.coordinates}));
        break;
    }
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

  removeCoordinates(listOfCoordinates) {
    listOfCoordinates.map(coordinate => {
      if (JSON.stringify(this.state.current) === JSON.stringify(coordinate)) {
        listOfCoordinates.splice(listOfCoordinates.indexOf(coordinate), 1);
      }
    });

    this.setState({
      coordinates: listOfCoordinates,
    });
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

    activeTabs.push(
      {
        info: 
          {
            active: true, 
            isOpen: true, 
            coordinatesAdded: false,
          }, 
        coordinates: coordinates, 
        data: 
          {
            dates: [], 
            tackle: [], 
            bait: [],
          }, 
      }
    ); // will need to be change to coordinates + corresponding information or use cached data

    this.setState({
      current: currentCoordinate,
    }, () => {
      this.toggleSinglePointMenu(currentCoordinate);
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
        let currentTabState = this.state.currentTabState;
        activeInformation.renderRemove = !this.state.activeInformation.renderRemove;
        currentTabState.coordinatesAdded = !this.state.currentTabState.coordinatesAdded;
        this.setState({
          activeInformation: activeInformation,
          currentTabState: currentTabState,
        }, () => this.addCoordinates());
        break;
      case('removeCoordinates'): 
      //possible to make a switch stmt => combine in add coordinates => add type param to togglehandler to accept argument to switch between the two 
        let prevTabState = this.state.currentTabState;
        activeInformation.renderRemove = !this.state.activeInformation.renderRemove;
        prevTabState.coordinatesAdded = !this.state.currentTabState.coordinatesAdded;
        this.setState({
          activeInformation: activeInformation,
          currentTabState: prevTabState,
        }, () => this.removeCoordinates(this.state.coordinates));
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
        });
        break;
      case('info_card'):
        //will need to adjust state of the previously rendered window and rerender 
        // that window when the card is closed completely

        // other option would be to render a modal overlay or something similar 
        this.setState({
          toggleInfoCard: !this.state.toggleInfoCard,
        }, () => console.log('toggle info card status: ', this.state.toggleInfoCard));
        break;
      case('date'):
        this.setState({
          selectedDataToDisplay: 'date',
        });
        break;
      case('tackle'):
        this.setState({
          selectedDataToDisplay: 'tackle',
        });
        break;
      case('bait'):
        this.setState({
          selectedDataToDisplay: 'bait',
        });
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

  /** Method used in Component: DisplayContainer -- returns info from selected card */
  retrieveData(data) {    
    this.setState({
      infoCardData: data,
    }, () => console.log('info card data: ', this.state.infoCardData));
  };

  /** Method used in Component: DatabaseBanner -- executes database reset */
  databaseReset() {
    this.setState({
      dbActivelyLoading: true,
    }, () => {
      fetch('RESET_DATABASE', {flag: true})
        .then(result => {
          let dbStatus = this.state.dbLoadStatus;

          if (result.data.status === 'success') {
            dbStatus.status = true;

            this.setState({
              dbLoadStatus: dbStatus,
              dbActivelyLoading: false,
            });
          } else {
            dbStatus.status = false;
            dbStatus.failedAttempts++;

            this.setState({
              dbLoadStatus: dbStatus,
              dbActivelyLoading: false, 
            });
          }
        })
        .catch(err => console.log(err));
    })
  };

  /** Method used in Component: DatabaseBanner -- Dismisses that the database is offline and removes the banner */
  dismissDatabaseStatus() {
    this.setState({
      dbBanner: false,
    });
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
              infoCardData={this.state.infoCardData}
              more={this.accessMoreInformation} 
              toggleHandler={this.toggleHandler}
              toggleDisplay={this.state.toggleDisplay}
              toggleInfoCard={this.state.toggleInfoCard}
              currentTabState={this.state.currentTabState}
              updateTabState={this.updateTabState}
              save={this.handleSave}
              selectedData={this.state.selectedDataToDisplay}
              retrieveData={this.retrieveData}
            /> : null
          }
          <MapContainer 
            active={this.state.leftWindowActive} 
            toggle={this.activateWindow} 
            activeCoordinate={this.state.current}
            getClickedCoordinates={this.getClickedCoordinates}
          />
        </div>
        <BannerContainer 
          databaseStatus={this.state.dbBanner}
          dbActivelyLoading={this.state.dbActivelyLoading}
          loadStatus={this.state.dbLoadStatus}
          reset={this.databaseReset}
          dismiss={this.dismissDatabaseStatus}
        />
      </div>
    )
  }
};