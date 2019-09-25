import React from 'react';

const DropDownMenu = (props) => (
  <div id='drop-down-wrapper'>
    <ul id='drop-down-menu'>
      {props.values.map(item => (
        <li id={`list-item-${item}`} onClick={() => console.log('drop it')}>{item}</li>
      ))}
    </ul>
  </div>
);

export default DropDownMenu;