import React from 'react';

import FormWithDropDown from '../forms/formWithDropDown';
import SaveButton from '../forms/saveButton';
import GenericButton from '../header/button';

export default class IndividualCatchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: '',
      formType: '',
      information: {}, //will likely need to add default values to prevent errors
      
    };

    this.captureValue = this.captureValue.bind(this);
    this.setValues = this.setValues.bind(this);
  };

  setValues(type) {
    /** Capture the initial information object state */
    let information = this.state.information;

    /** Based on type, mutate the information object and update the state of the changes */
    switch(type) {
      case('INDIVIDUAL_WEIGHT'):
        information.individualWeight = this.state.formValue;
        this.setState({
          information: information,
        });
        break;
      case('DATE_TIME'):
        //will need edge cases added to handle two different types of inputs
        information.time = this.state.formValue;
        this.setState({
          information: information,
        });
        break;
      case('TACKLE'):
        information.tackle = this.state.formValue;
        this.setState({
          information: information,
        });
        break;
      case('BAIT'):
        information.bait = this.state.formValue;
        this.setState({
          information: information,
        });
        break;
      case('REGION_CAPTURED'):
        information.regionId = this.state.formValue;
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
    const regions = ['---------', 'north', 'south', 'east', 'west'];

    return (
      <div>
        <FormWithDropDown 
          options={{dropDown: false, search: false, textArea: false, submit: true, date: false, time: false, }}
          category={`Individual Weight`}
          placeholder={'Enter Individual Weight'}
          dropDown={[]}
          type={'INDIVIDUAL_WEIGHT'}
          capture={this.captureValue}
        />
        <FormWithDropDown 
          options={{dropDown: false, search: false, textArea: false, submit: false, date: true, time: true, }}
          category={`Date and Time of Capture`}
          dropDown={[]}
          type={'DATE_TIME'}
          capture={this.captureValue}
        />
        <GenericButton 
          action={
            () => {
             this.props.toggleHandler('display');
             this.props.toggleHandler('date');
            }
          }
          name={'Show All Capture Dates'}
        />
        <div>Upload Photos here</div>
        <button>Show All Photos of Species</button>
        <div>if button is clicked, render a carousel of photos or something</div>
        <FormWithDropDown 
          options={{dropDown: false, search: false, textArea: true, submit: false, date: false, time: false, }}
          category={`Tackle Used`}
          placeholder={'Enter Items Separated by Commas'}
          dropDown={[]}
          type={'TACKLE'}
          capture={this.captureValue}
        />
        <GenericButton 
          action={
            () => {
              this.props.toggleHandler('display');
              this.props.toggleHandler('tackle');
            }
          }
          name={'Show All Tackle Setups'}
        />
        <button>Price Compare Tackle</button>
        <FormWithDropDown 
          options={{dropDown: false, search: false, textArea: false, submit: true, date: false, time: false, }}
          category={`Bait Used`}
          placeholder={'Enter Baits'}
          dropDown={[]}
          type={'BAIT'}
          capture={this.captureValue}
        />
        <GenericButton 
          action={
            () => {
              this.props.toggleHandler('display');
              this.props.toggleHandler('bait');
            }
          }
          name={'Show All Baits'}
        />
        <button>Price Compare Baits</button>
        <FormWithDropDown 
          options={{dropDown: true, search: false, textArea: false, submit: false, date: false, time: false, }}
          category={`Region of Capture`}
          dropDown={regions}
          type={'REGION_CAPTURED'}
          capture={this.captureValue}
        />
        <SaveButton 
          save={this.props.save} 
          type={'INDIVIDUAL_DETAILS'}
          state={this.state.information}
        />
        <GenericButton 
          action={
            () => {
              //replace me
              console.log('render environment entry form')
            }
          }
          name={'Add Environmental Details'}
        />
        <button>Show Other Region of Capture</button>
        <button>Show Seafloor Topography</button>
        <button>Search Web for Largest Recorded Catch of Species</button>
      </div>
    )
  }
};