import React, { useState, useEffect } from 'react';

import FormWithDropDown from '../../forms/formWithDropDown';
import SaveButton from '../../forms/saveButton';

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
        });
        break;
      case('AIR_TEMP'):
        information.airTemperature = this.state.formValue;
        this.setState({
          information: information,
        });
        break;
      case('WIND_SPEED'):
        information.windSpeed = this.state.formValue;
        this.setState({
          information: information,
        });
        break;
      case('TYPE_OF_SKIES'):
        information.typeOfSkies = this.state.formValue;
        this.setState({
          information: information,
        });
        break;
      case('PRESSURE'):
        information.pressure = this.state.formValue;
        this.setState({
          information: information,
        });
        break;
      case('WEATHER_EVENTS'):
        //needs to handle additional renders to the list from adding and also the adding from the database - options will not be hardcoded 
        information.weatherEvents = this.state.formValue;
        this.setState({
          information: information,
        });
        break;
      case('NOTABLE'):
        //needs to handle additional renders to the list from adding and also the adding from the database - options will not be hardcoded 
        information.notable = this.state.formValue;
        this.setState({
          information: information,
        });
        break;
      case('WATER_TEMP'):
        //needs to handle additional renders to the list from adding and also the adding from the database - options will not be hardcoded 
        information.waterTemperature = this.state.formValue;
        this.setState({
          information: information,
        });
        break;
      case('WATER_CLARITY'):
        //needs to handle additional renders to the list from adding and also the adding from the database - options will not be hardcoded 
        information.waterClarity = this.state.formValue;
        this.setState({
          information: information,
        });
        break;
      case('WATER_PH'):
        //needs to handle additional renders to the list from adding and also the adding from the database - options will not be hardcoded 
        information.waterPh = this.state.formValue;
        this.setState({
          information: information,
        });
        break;
      case('SEAFLOOR_TYPE'):
        //needs to handle additional renders to the list from adding and also the adding from the database - options will not be hardcoded 
        information.floorType = this.state.formValue;
        this.setState({
          information: information,
        });
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

    const seasons = ['-----', 'Spring', 'Summer', 'Fall', 'Winter'];
    const airTemperature = ['-----', 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115];
    /** make select all that apply */
    const windSpeed = ['-----', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 30];
    const typeOfSkies = ['-----', 'Clear', 'Overcast', 'Cloudy', 'Rainy', 'Thunder Storm', 'Hurricane'];
    const pressure = ['-----', 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];
    /** make select all that apply */
    const weatherEvents = ['-----', 'rain', 'snow', 'excessive heat', 'hail', 'thunder', 'lightning', ];
    const waterClarity = ['-----', 'clear', 'murky', ];
    const waterTemperature = ['-----', 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115];
    const waterPH = ['-----', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    /** make select all that apply */
    const sedimentType = ['-----', 'silt', 'clay', 'rocky', 'sandy', 'shale'];
    /** make select all that apply */
    const floorType = ['-----', 'rocky', 'sandy', 'flat'];

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
          dropDown={seasons}
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
          dropDown={airTemperature}
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
          dropDown={windSpeed}
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
          dropDown={typeOfSkies}
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
          dropDown={pressure}
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
          dropDown={weatherEvents}
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
          placeholder={'Add Notable Weather Details'}
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
          dropDown={waterClarity}
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
          dropDown={waterTemperature}
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
          dropDown={waterPH}
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
          category={`Floor Type`}
          dropDown={floorType}
          type={'SEAFLOOR_TYPE'}
          capture={this.captureValue}
        />          
        {/* water clarity, water temperature, water ph, sediment type, water floor types, what season, air temperature, wind speed, type of skies, pressure barometer, weather events, notables */}
        <div>create drop down and localization of user, edit place, area, features, etc </div>
        <SaveButton 
          save={this.props.save} 
          type={'LOCATION'}
          state={this.state.information}
        />
      </div>
    </div>
    )
  }
}