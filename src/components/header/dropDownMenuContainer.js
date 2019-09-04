import React from 'react';

import DropDownMenuButton from './dropDownMenuButton';

const styles = {
  width:'200px',
  height:'400px',
  backgroundColor: 'white', 
};

const menuOptions = ['option1','option1','option1','option1','option1'];

const DropDownMenuContainer = (props) => (
  <div>
    {menuOptions.map(option => (
      <DropDownMenuButton value={option}/>
    ))}
  </div>
);

export default DropDownMenuContainer;