import React from 'react';

import MapContainer from '../map/mapContainer';
import SideBarContainer from '../map/sideBarContainer';
import HeaderContainer from '../header/headerContainer';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const styles = {
      width: '1665px', //change based on width of the browser that is in use
      height: '1800px', //change height based on the needs of the screen == change based on the height of the browser that is in use 
      backgroundColor: 'green',
    };

    return (
      <div>
        <HeaderContainer />
        <div id='main-container' style={styles}>
          {/* <SideBarContainer /> */}
          <MapContainer />
        </div>
      </div>
    )
  }
};