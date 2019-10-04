import React from 'react';

import FormWithDropDown from '../forms/formWithDropDown';

export default class IndividualCatchForm extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <FormWithDropDown 
          options={{dropDown: false, search: false, textArea: false, submit: true, date: false, time: false, }}
          category={`Individual Weight`}
          placeholder={'Enter Individual Weight'}
          dropDown={[]}
        />
        {/* <div>Date of Capture (Render a calendar to select date)</div> */}
        <FormWithDropDown 
          options={{dropDown: false, search: false, textArea: false, submit: false, date: true, time: true, }}
          category={`Date and Time of Capture`}
          dropDown={[]}
        />
        <button>All Capture Dates</button>
        <div>Upload Photos here</div>
        <button>Show All Photos of Species</button>
        <div>if button is clicked, render a carousel of photos or something</div>
        <FormWithDropDown 
          options={{dropDown: false, search: false, textArea: true, submit: false, date: false, time: false, }}
          category={`Tackle Used`}
          placeholder={'Enter Items Separated by Commas'}
          dropDown={[]}
        />
        <button>Show All Tackle Setups</button>
        <button>Price Compare Tackle</button>
        <FormWithDropDown 
          options={{dropDown: false, search: false, textArea: false, submit: true, date: false, time: false, }}
          category={`Bait Used`}
          placeholder={'Enter Baits'}
          dropDown={[]}
        />
        <button>Show All Bait Used</button>
        <button>Price Compare Baits</button>
        <FormWithDropDown 
          options={{dropDown: true, search: false, textArea: false, submit: false, date: false, time: false, }}
          category={`Region of Capture`}
          dropDown={[]}
        />
          <button>Show Other Region of Capture</button>
          <button>Show Seafloor Topography</button>
          <button>Search Web for Largest Recorded Catch of Species</button>
      </div>
    )
  }
};