import React, { useState, useEffect } from 'react';

import FormWithDropDown from '../../forms/formWithDropDown';

export default class LocationInformationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null,
      water: null,
    };
  }
  
  render() {
    const styles = {
      height: '600px',
      width: '600px',
      backgroundColor: 'red',
      zIndex: 11,
    };    

    return (
      <div>
      <div id="location-information-container">
        <div>Weather Details: </div>
        <FormWithDropDown 
          options={{dropDown: true, search: false, textArea: false, submit: false, date: false, time: false, }}
          category={`Weather Details`}
          dropDown={[]}
        />  
        <FormWithDropDown 
          options={{dropDown: true, search: false, textArea: false, submit: false, date: false, time: false, }}
          category={`Water Details`}
          dropDown={[]}
        />  
        <div>Edit Location / Region / Area: </div>
        <div>create drop down and localization of user, edit place, area, features, etc </div>
        <button onClick={() => this.props.toggleHandler('species')}>Add Fish Data</button>
      </div>
    </div>
    )
  }
}