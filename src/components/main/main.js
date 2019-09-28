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
    };

    this.activateWindow = this.activateWindow.bind(this);
    this.deactivateWindow = this.deactivateWindow.bind(this);
    this.retrieveCoordinates = this.retrieveCoordinates.bind(this);
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

  render() {
    const styles = {
      width: '1665px', //change based on width of the browser that is in use
      // height: '1800px', //change height based on the needs of the screen == change based on the height of the browser that is in use 
      paddingTop: '2%',
      paddingBottom: '3%',
      backgroundColor: 'green',
    };

    return (
      <div>
        <HeaderContainer activeTabs={this.state.activeTabs}/>
        <div id='map-container' style={styles}>
          {this.state.leftWindowActive ? <InformationWindow /> : null}
          <MapContainer active={this.state.leftWindowActive} toggle={this.activateWindow} retrieveCoordinates={this.retrieveCoordinates}/>
        </div>
      </div>
    )
  }
};