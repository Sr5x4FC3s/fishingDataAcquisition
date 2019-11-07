import React from 'react';
import FormWithDropDown from './formWithDropDown';
import SpeciesCard from '../information/speciesCard';
import { retrieve } from '../../../utility/apiUtility';

export default class SelectSpecies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeInformation: {
        status: false, 
        information: null, 
      },
      formValue: '',
      formType: '',
      information: {}, //will likely need to add default values to prevent errors
    };

    this.captureValue = this.captureValue.bind(this);
    this.setValues = this.setValues.bind(this);
  }


  setValues(type) {
    /** Capture the initial information object state */
    let information = this.state.information;
    let activeInformation = this.state.activeInformation;

    switch(type) {
      case('SPECIES_NAME'): 
        information.speciesName = this.state.formValue;
        this.setState({
          information: information,
        }, () => {
          retrieve('SPECIES', this.state.information.speciesName)
            .then(result => {
              activeInformation.status = true;
              activeInformation.information = result.data;
              this.setState({
                activeInformation: activeInformation,
              }, () => console.log(this.state.activeInformation));
            })
            .catch(err => {
              console.log(err);
            })
          //api call get request to fetch information 
          /**
           * steps:
           * call dummy point and get success and mock data 
           * populate mock data in the fields 
           * render new display 
           * test if notes field works
           * if saved, send post request and hit dummy route for saving data
           * test another species and repeat
           * open prev tab and see if the notes populate 
           */
        });
        break;
      case('NOTES'): 
        information.notes = this.state.formValue;
        this.setState({
          information: information,
        }, () => console.log('let get some notes: ', this.state.information));
        break;
    }
  };

  captureValue(event, type) {
    console.log('get it done: ', event, type);
    this.setState({
      formValue: event.target.value,
      formType: type,
    }, () => this.setValues(type));
    event.preventDefault();
  };

  render() {
    //test data
    const speciesName = ['---------', 'rod cod', 'lingcod', 'big eye', 'tuna'];

    return (
      <div id='select-species-container'>
        <FormWithDropDown 
          options={{
            dropDown: true, 
            search: false, 
            textArea: false, 
            submit: false, 
            date: false, 
            time: false, 
          }}
          category={`Species Name`}
          placeholder={'Select Species'}
          dropDown={speciesName}
          type={'SPECIES_NAME'}
          capture={this.captureValue}
        />
        {this.state.activeInformation.status ?
          <SpeciesCard 
            information={this.state.activeInformation.information}
          /> 
        : null}
      </div>
    )
  }
};