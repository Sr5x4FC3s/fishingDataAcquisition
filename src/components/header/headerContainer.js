import React from 'react';

import GenericButton from './button';
import Logo from './logo';
import HamburgerMenu from './menu';
import DropDownMenuContainer from './dropDownMenuContainer';
import TabContainer from '../information/tabs/tabContainer';

export default class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      renderMapTabs: false, 
    };
    this.show = this.show.bind(this);
  }

  show(e) {
    this.setState({
      showMenu: !this.state.showMenu,
    });
    e.preventDefault();
  }

  render() {
    const styles = {
      width: '1665px',
      height: '50px',
      backgroundColor: 'yellow',
    };
    
    const logoStyles = {
      width: '100px',
      height: '50px',
      backgroundColor: 'purple',
      float: 'left',
    };

    const barStyle = {
      width: '1465px',
      height: '50px',
      backgroundColor: 'grey',
      float: 'left',
    };
    
    const menuStyles = {
      width: '100px',
      height: '50px',
      backgroundColor: 'blue',
      float: 'left',
      cursor: 'pointer',
    };

    const innerStyle = {
      width: '60%',
      height: '80%',
      backgroundColor: 'red',
      marginLeft: '20%',
      marginTop: '.69%',
    };
    
    return (
      <div id='header-container' style={styles}>
        <div style={logoStyles}>
          <Logo />
        </div>
        <div style={barStyle}>
          <div style={innerStyle}>
            <TabContainer 
              activeTabs={this.props.activeTabs}
              removeActiveTab={this.props.removeActiveTab}
            /> 
          </div>
        </div>
        <div style={menuStyles}>
          <HamburgerMenu show={this.show}/>
          {this.state.showMenu ? <DropDownMenuContainer /> : null}
        </div>
      </div>
    )
  }
}