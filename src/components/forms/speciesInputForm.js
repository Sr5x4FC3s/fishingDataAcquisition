import React from 'react';

import IndividualCatchForm from '../forms/individualCatchForm';
import FormWithDropDown from '../forms/formWithDropDown';
import SaveButton from '../forms/saveButton';

export default class SpeciesInputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleIndividualForm: false,
      formValue: '',
      formType: '',
      information: {}, //will likely need to add default values to prevent errors
    };

    this.toggleIndividualForm = this.toggleIndividualForm.bind(this);
    this.captureValue = this.captureValue.bind(this);
    this.setValues = this.setValues.bind(this);
  }

  toggleIndividualForm() {
    this.setState({
      toggleIndividualForm: !this.state.toggleIndividualForm,
    })
  };

  setValues(type) {
    /** Capture the initial information object state */
    let information = this.state.information;

    /** Based on type, mutate the information object and update the state of the changes */
    switch(type) {
      case('SPECIES_NAME'):
        information.speciesName = this.state.formValue;
        this.setState({
          information: information,
        }, () => console.log(this.state.information));
        break;
      case('SCIENTIFIC_NAME'):
        information.scientificName = this.state.formValue;
        this.setState({
          information: information,
        }, () => console.log(this.state.information));
        break;
      case('SPECIES_CATEGORY'):
        information.speciesCategory = this.state.formValue;
        this.setState({
          information: information,
        }, () => console.log(this.state.information));
        break;
      case('WEIGHT'):
        information.speciesWeight = this.state.formValue;
        this.setState({
          information: information,
        }, () => console.log(this.state.information));
        break;
      case('LENGTH'):
        information.speciesLength = this.state.formValue;
        this.setState({
          information: information,
        }, () => console.log(this.state.information));
        break;
      case('REGIONS'):
        //needs to handle additional renders to the list from adding and also the adding from the database - options will not be hardcoded 
        information.regions = this.state.formValue;
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
    const speciesName = ['---------', 'rod cod', 'lingcod', 'big eye', 'tuna'];
    const scientificName = ['---------', 'cod', 'bread', 'shake'];
    const speciesCategory = ['---------', 'fish', 'crustacean', 'mollusk'];
    const weightRange = ['---------', 1,5,10,15,20,25,30,35,40,45,50];
    const lengthRange = ['---------', '5"','10"','15"','20"','25"','30"'];
    const regions = ['---------', 'north', 'south', 'east', 'west'];

    return (
      <div id='species-input-container'>
        <FormWithDropDown 
          options={{
            dropDown: true, 
            search: true, 
            textArea: false, 
            submit: false, 
            date: false, 
            time: false, 
          }}
          category={`Species Name`}
          placeholder={'Enter Species Name'}
          dropDown={speciesName}
          type={'SPECIES_NAME'}
          capture={this.captureValue}
        />
        <FormWithDropDown 
          options={{
            dropDown: true, 
            search: true, 
            textArea: false, 
            submit: false, 
            date: false, 
            time: false, 
          }}
          category={`Species Scientific Name`}
          placeholder={'Enter Scientific Name'}
          dropDown={scientificName}
          type={'SCIENTIFIC_NAME'}
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
          category={`Species Category`}
          dropDown={speciesCategory}
          type={'SPECIES_CATEGORY'}
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
          category={`Weight Range`}
          dropDown={weightRange}
          type={'WEIGHT'}
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
          category={`Length Range`}
          dropDown={lengthRange}
          type={'LENGTH'}
          capture={this.captureValue}
        />
        <FormWithDropDown 
          options={{
            dropDown: true, 
            search: false, 
            textArea: false, 
            submit: true, 
            date: false, 
            time: false, 
          }}
          category={`Regions`}
          placeholder={'Enter Region'}
          dropDown={regions}
          type={'REGIONS'}
          capture={this.captureValue}
        />
        <button>Add Individual Details</button>
        <SaveButton 
          save={this.props.save}
          type={'SPECIES_INPUT'}
          state={this.state.information}
        />
        {/* this gets rendered when the above button is pressed */}
        <IndividualCatchForm 
          save={this.props.save}
        /> 
      </div>
    )
  }
};