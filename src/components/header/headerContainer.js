import React from 'react';

import GenericButton from './button';
import Logo from './logo';
import HamburgerMenu from './menu';
import DropDownMenuContainer from './dropDownMenuContainer';

export default class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
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
    
    const menuStyles = {
      width: '100px',
      height: '50px',
      backgroundColor: 'blue',
      float: 'right',
      cursor: 'pointer',
    };
    
    const headerValues = ['one', 'two', 'three', 'four', 'five'];
    return (
      <div id='header-container' style={styles}>
        <div style={logoStyles}>
          <Logo />
        </div>
        <div style={menuStyles}>
          <HamburgerMenu show={this.show}/>
          {this.state.showMenu ? <DropDownMenuContainer /> : null}
        </div>
      </div>
    )
  }
}