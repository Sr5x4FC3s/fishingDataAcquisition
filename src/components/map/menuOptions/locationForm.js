import React, { useState, useEffect } from 'react';

import FormWithDropDown from '../../forms/formWithDropDown';

export default class LocationInformationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: '',
      formType: '',
      information: {},
    };

    this.captureValue = this.captureValue.bind(this);
    this.setValues = this.setValues.bind(this);
  }

  setValues(type) {
    /** Capture the initial information object state */
    let information = this.state.information;

    /** Based on type, mutate the information object and update the state of the changes */
    switch(type) {
      case('SEASONS'):
        information.seasons = this.state.formValue;
        this.setState({
          information: information,
        }, () => console.log(this.state.information));
        break;
      case('AIR_TEMP'):
        information.airTemperature = this.state.formValue;
        this.setState({
          information: information,
        }, () => console.log(this.state.information));
        break;
      case('WIND_SPEED'):
        information.windSpeed = this.state.formValue;
        this.setState({
          information: information,
        }, () => console.log(this.state.information));
        break;
      case('TYPE_OF_SKIES'):
        information.typeOfSkies = this.state.formValue;
        this.setState({
          information: information,
        }, () => console.log(this.state.information));
        break;
      case('PRESSURE'):
        information.pressure = this.state.formValue;
        this.setState({
          information: information,
        }, () => console.log(this.state.information));
        break;
      case('WEATHER_EVENTS'):
        //needs to handle additional renders to the list from adding and also the adding from the database - options will not be hardcoded 
        information.weatherEvents = this.state.formValue;
        this.setState({
          information: information,
        }, () => console.log(this.state.information));
        break;
      case('NOTABLE'):
        //needs to handle additional renders to the list from adding and also the adding from the database - options will not be hardcoded 
        information.notable = this.state.formValue;
        this.setState({
          information: information,
        }, () => console.log(this.state.information));
        break;
      case('WATER_TEMP'):
        //needs to handle additional renders to the list from adding and also the adding from the database - options will not be hardcoded 
        information.waterTemperature = this.state.formValue;
        this.setState({
          information: information,
        }, () => console.log(this.state.information));
        break;
      case('WATER_CLARITY'):
        //needs to handle additional renders to the list from adding and also the adding from the database - options will not be hardcoded 
        information.waterClarity = this.state.formValue;
        this.setState({
          information: information,
        }, () => console.log(this.state.information));
        break;
      case('WATER_PH'):
        //needs to handle additional renders to the list from adding and also the adding from the database - options will not be hardcoded 
        information.waterPh = this.state.formValue;
        this.setState({
          information: information,
        }, () => console.log(this.state.information));
        break;
      case('SEDIMENT'):
        //needs to handle additional renders to the list from adding and also the adding from the database - options will not be hardcoded 
        information.sediment = this.state.formValue;
        this.setState({
          information: information,
        }, () => console.log(this.state.information));
        break;
      case('FLOOR_TYPE'):
        //needs to handle additional renders to the list from adding and also the adding from the database - options will not be hardcoded 
        information.floorType = this.state.formValue;
        this.setState({
          information: information,
        }, () => console.log(this.state.information));
        break;
    }
  };

  captureValue(event, type) {
    this.setState({
      formValue: event.target.value,
      formType: type,
    }, () => this.setValues(type));
    event.preventDefault();
  };
  
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
          options={{
            dropDown: true, 
            search: false, 
            textArea: false, 
            submit: false, 
            date: false, 
            time: false, 
          }}
          category={`Season`}
          dropDown={[]}
          type={'SEASONS'}
          capture={this.captureValue}
        />
        <FormWithDropDown 
          options={{
            dropDown: true, 
            search: false, 
            textArea: false, 
            submit: false, 
            date: false, 
            time: false, 
          }}
          category={`Air Temperature Range`}
          dropDown={[]}
          type={'AIR_TEMP'}
          capture={this.captureValue}
        />  
        <FormWithDropDown 
          options={{
            dropDown: true, 
            search: false, 
            textArea: false, 
            submit: false, 
            date: false, 
            time: false, 
          }}
          category={`Wind Speed`}
          dropDown={[]}
          type={'WIND_SPEED'}
          capture={this.captureValue}
        />  
        <FormWithDropDown 
          options={{
            dropDown: true, 
            search: false, 
            textArea: false, 
            submit: false, 
            date: false, 
            time: false, 
          }}
          category={`Type of Skies`}
          dropDown={[]}
          type={'TYPE_OF_SKIES'}
          capture={this.captureValue}
        />  
        <FormWithDropDown 
          options={{
            dropDown: true, 
            search: false, 
            textArea: false, 
            submit: false, 
            date: false, 
            time: false, 
          }}
          category={`Barometer Pressure`}
          dropDown={[]}
          type={'PRESSURE'}
          capture={this.captureValue}
        />
        <FormWithDropDown 
          options={{
            dropDown: false,
             search: false,
              textArea: false,
               submit: true, 
               date: false, 
               time: false, 
              }}
          category={`Weather Events`}
          dropDown={[]}
          type={'WEATHER_EVENTS'}
          capture={this.captureValue}
        />  
        <FormWithDropDown 
          options={{
            dropDown: false,
             search: false,
              textArea: true, 
              submit: false, 
              date: false, 
              time: false, 
            }}
          category={`Notable Weather`}
          dropDown={[]}
          type={'NOTABLE'}
          capture={this.captureValue}
        />      
        <div>Water Details: </div>
        <FormWithDropDown 
          options={{
            dropDown: true, 
            search: false, 
            textArea: false, 
            submit: false, 
            date: false, 
            time: false, 
          }}
          category={`Water Clarity`}
          dropDown={[]}
          type={'WATER_CLARITY'}
          capture={this.captureValue}
        />
        <FormWithDropDown 
          options={{
            dropDown: true, 
            search: false, 
            textArea: false, 
            submit: false, 
            date: false, 
            time: false, 
          }}
          category={`Water Temperature Range`}
          dropDown={[]}
          type={'WATER_TEMP'}
          capture={this.captureValue}
        />
        <FormWithDropDown 
          options={{
            dropDown: true, 
            search: false, 
            textArea: false, 
            submit: false, 
            date: false, 
            time: false, 
          }}
          category={`Water PH Levels`}
          dropDown={[]}
          type={'WATER_PH'}
          capture={this.captureValue}
        />
        <FormWithDropDown 
          options={{
            dropDown: true, 
            search: false, 
            textArea: false, 
            submit: false, 
            date: false, 
            time: false, 
          }}
          category={`Sediment Type`}
          dropDown={[]}
          type={'SEDIMENT'}
          capture={this.captureValue}
        />
        <FormWithDropDown 
          options={{
            dropDown: true, 
            search: false, 
            textArea: false, 
            submit: false, 
            date: false, 
            time: false, 
          }}
          category={`Floor Type`}
          dropDown={[]}
          type={'FLOOR_TYPE'}
          capture={this.captureValue}
        />          
        {/* water clarity, water temperature, water ph, sediment type, water floor types, what season, air temperature, wind speed, type of skies, pressure barometer, weather events, notables */}
        <div>create drop down and localization of user, edit place, area, features, etc </div>
        <button onClick={() => this.props.toggleHandler('species')}>Add Fish Data</button>
      </div>
    </div>
    )
  }
}