import React from 'react';

import IndividualCatchForm from '../forms/individualCatchForm';
import FormWithDropDown from '../forms/formWithDropDown';

export default class SpeciesInputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleIndividualForm: false,
      formValue: '',
      formType: '',
      information: {}, 
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
        }, () => console.log('changes to the state: ', this.state.information))
        break;
      case('SCIENTIFIC_NAME'):
        information.scientificName = this.state.formValue;
        this.setState({
          information: information,
        }, () => console.log('changes to the state: ', this.state.information))
        break;
      case('REGIONS'):
        information.regions = this.state.formValue;
        this.setState({
          information: information,
        }, () => console.log('changes to the state: ', this.state.information))
        break;
    }
  }

  //build a set to overall object method to handle captured value after user is done editting a specific field 

  captureValue(event, type) {
    this.setState({
      formValue: event.target.value,
      formType: type,
    }, () => this.setValues(type));
    event.preventDefault();
  };

  render() {
    return (
      <div id='species-input-container'>
        <FormWithDropDown 
          options={{dropDown: true, search: true, textArea: false, submit: false, date: false, time: false, }}
          category={`Species Name`}
          placeholder={'Enter Species Name'}
          dropDown={[]}
          type={'SPECIES_NAME'}
          capture={this.captureValue}
        />
        <FormWithDropDown 
          options={{dropDown: true, search: true, textArea: false, submit: false, date: false, time: false, }}
          category={`Species Scientific Name`}
          placeholder={'Enter Scientific Name'}
          dropDown={[]}
          type={'SCIENTIFIC_NAME'}
          capture={this.captureValue}
        />
        <FormWithDropDown 
          options={{dropDown: true, search: false, textArea: false, submit: false, date: false, time: false, }}
          category={`Species Category`}
          dropDown={[]}
          type={'SPECIES_CATEGORY'}
          capture={this.captureValue}
        />
        <FormWithDropDown 
          options={{dropDown: true, search: false, textArea: false, submit: false, date: false, time: false, }}
          category={`Weight Range`}
          dropDown={[]}
          type={'WEIGHT'}
          capture={this.captureValue}
        />
        <FormWithDropDown 
          options={{dropDown: true, search: false, textArea: false, submit: false, date: false, time: false, }}
          category={`Length Range`}
          dropDown={[]}
          type={'LENGTH'}
          capture={this.captureValue}
        />
        <FormWithDropDown 
          options={{dropDown: true, search: false, textArea: false, submit: true, date: false, time: false, }}
          category={`Regions`}
          placeholder={'Enter Region'}
          dropDown={[]}
          type={'REGIONS'}
          capture={this.captureValue}
        />
        <button>Add Individual Details</button>
        <button>Save</button>
        {/* this gets rendered when the above button is pressed */}
        <IndividualCatchForm /> 
      </div>
    )
  }
};