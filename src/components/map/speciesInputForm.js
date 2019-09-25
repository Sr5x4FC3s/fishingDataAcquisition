import React from 'react';

import IndividualCatchForm from './individualCatchForm';
import FormWithDropDown from './formWithDropDown';

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
          options={{dropDown: true, search: true, textArea: false, submit: false, date: false, }}
          category={`Species Name`}
          placeholder={'Enter Species Name'}
          dropDown={[]}
        />
        <FormWithDropDown 
          options={{dropDown: true, search: true, textArea: false, submit: false, date: false, }}
          category={`Species Scientific Name`}
          placeholder={'Enter Scientific Name'}
          dropDown={[]}
        />
        <FormWithDropDown 
          options={{dropDown: true, search: false, textArea: false, submit: false, date: false, }}
          category={`Species Category`}
          dropDown={[]}
        />
        <FormWithDropDown 
          options={{dropDown: true, search: false, textArea: false, submit: false, date: false, }}
          category={`Weight Range`}
          dropDown={[]}
        />
        <FormWithDropDown 
          options={{dropDown: true, search: false, textArea: false, submit: false, date: false, }}
          category={`Length Range`}
          dropDown={[]}
        />
        <FormWithDropDown 
          options={{dropDown: true, search: false, textArea: false, submit: true, date: false, }}
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