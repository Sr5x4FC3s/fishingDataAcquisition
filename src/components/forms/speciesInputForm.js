import React from 'react';

import IndividualCatchForm from '../forms/individualCatchForm';
import FormWithDropDown from '../forms/formWithDropDown';

export default class SpeciesInputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleIndividualForm: false, 
    };

    this.toggleIndividualForm = this.toggleIndividualForm.bind(this);
  }

  toggleIndividualForm() {
    this.setState({
      toggleIndividualForm: !this.state.toggleIndividualForm,
    })
  };

  render() {
    return (
      <div id='species-input-container'>
        <FormWithDropDown 
          options={{dropDown: true, search: true, textArea: false, submit: false, date: false, time: false, }}
          category={`Species Name`}
          placeholder={'Enter Species Name'}
          dropDown={[]}
        />
        <FormWithDropDown 
          options={{dropDown: true, search: true, textArea: false, submit: false, date: false, time: false, }}
          category={`Species Scientific Name`}
          placeholder={'Enter Scientific Name'}
          dropDown={[]}
        />
        <FormWithDropDown 
          options={{dropDown: true, search: false, textArea: false, submit: false, date: false, time: false, }}
          category={`Species Category`}
          dropDown={[]}
        />
        <FormWithDropDown 
          options={{dropDown: true, search: false, textArea: false, submit: false, date: false, time: false, }}
          category={`Weight Range`}
          dropDown={[]}
        />
        <FormWithDropDown 
          options={{dropDown: true, search: false, textArea: false, submit: false, date: false, time: false, }}
          category={`Length Range`}
          dropDown={[]}
        />
        <FormWithDropDown 
          options={{dropDown: true, search: false, textArea: false, submit: true, date: false, time: false, }}
          category={`Regions`}
          placeholder={'Enter Region'}
          dropDown={[]}
        />
        <button>Add Individual Details</button>
        {/* this gets rendered when the above button is pressed */}
        <IndividualCatchForm /> 
      </div>
    )
  }
};