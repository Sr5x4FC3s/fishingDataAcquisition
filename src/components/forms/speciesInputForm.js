import React from 'react';

import IndividualCatchForm from '../forms/individualCatchForm';
import FormWithDropDown from '../forms/formWithDropDown';
import SaveButton from '../forms/saveButton';
import GenericButton from '../header/button';
import SelectSpecies from './selectSpecies';

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

  componentDidMount() {
    //make API call to populate data from species table
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
        });
        break;
      case('SCIENTIFIC_NAME'):
        information.scientificName = this.state.formValue;
        this.setState({
          information: information,
        });
        break;
      case('SPECIES_CATEGORY'):
        information.speciesCategory = this.state.formValue;
        this.setState({
          information: information,
        });
        break;
      case('WEIGHT'):
        information.speciesWeight = this.state.formValue;
        this.setState({
          information: information,
        });
        break;
      case('LENGTH'):
        information.speciesLength = this.state.formValue;
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
    return (
      <div id='species-input-container'>
        <SelectSpecies />
        <GenericButton 
          action={
            () => {
              this.props.toggleHandler('individual');
            }
          }
          name={'Add Catch'}
        />
        <SaveButton 
          save={this.props.save}
          type={'SPECIES_INPUT'}
          state={this.state.information}
        />
      </div>
    )
  }
};