import React from 'react';

import GenericButton from './button';
import Logo from './logo';

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

const headerValues = ['one', 'two', 'three', 'four', 'five'];

const HeaderContainer = () => (
  <div id='header-container' style={styles}>
    <div style={logoStyles}>
      <Logo />
    </div>
    {headerValues.map(value => (
      <GenericButton value={value}/>
    ))}
  </div>
);

export default HeaderContainer;