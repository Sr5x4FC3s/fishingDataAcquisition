import React from 'react';

import MapContainer from '../map/mapContainer';
import SideBarContainer from '../map/sideBarContainer';
import HeaderContainer from '../header/headerContainer';
import InformationContainer from '../information/InfoContainer';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const styles = {
      width: '1665px', //change based on width of the browser that is in use
      // height: '1800px', //change height based on the needs of the screen == change based on the height of the browser that is in use 
      paddingTop: '3%',
      paddingBottom: '3%',
      backgroundColor: 'green',
    };

    return (
      <div>
        <HeaderContainer />
        <div id='map-container' style={styles}>
          {/* <SideBarContainer /> */}
          <MapContainer />
          <InformationContainer />
        </div>
      </div>
    )
  }
};