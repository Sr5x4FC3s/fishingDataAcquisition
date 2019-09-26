import React from 'react';

import MapContainer from '../map/mapContainer';
import InformationWindow from '../map/informationWindow';
import HeaderContainer from '../header/headerContainer';
import InformationContainer from '../information/InfoContainer';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftWindowActive: false,
    };

    this.activateWindow = this.activateWindow.bind(this);
  }

  activateWindow() {
    this.setState({
      leftWindowActive: !this.state.leftWindowActive,
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

    return (
      <div>
        <HeaderContainer />
        <div id='map-container' style={styles}>
          {this.state.leftWindowActive ? <InformationWindow /> : null}
          <MapContainer active={this.state.leftWindowActive} toggle={this.activateWindow}/>
        </div>
      </div>
    )
  }
};