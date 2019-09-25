import React from 'react';

import FormWithDropDown from './formWithDropDown';

export default class IndividualCatchForm extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <FormWithDropDown 
          options={{dropDown: false, search: false, textArea: false, submit: true, }}
          category={`Individual Weight`}
          placeholder={'Enter Individual Weight'}
          dropDown={null}
        />
        <div>Date of Capture (Render a calendar to select date)</div>
        <button>All Capture Dates</button>
        <div>Upload Photos here</div>
        <button>Show All Photos of Species</button>
        <div>if button is clicked, render a carousel of photos or something</div>
        <FormWithDropDown 
          options={{dropDown: false, search: false, textArea: true, submit: false, }}
          category={`Tackle Used`}
          placeholder={'Enter Items Separated by Commas'}
          dropDown={null}
        />
        <button>Show All Tackle Setups</button>
        <button>Price Compare Tackle</button>
        <FormWithDropDown 
          options={{dropDown: false, search: false, textArea: false, submit: true, }}
          category={`Bait Used`}
          placeholder={'Enter Baits'}
          dropDown={null}
        />
        <button>Show All Bait Used</button>
        <button>Price Compare Baits</button>
        <FormWithDropDown 
          options={{dropDown: true, search: false, textArea: false, submit: false, }}
          category={`Region of Capture`}
          dropDown={null}
        />
          <button>Show Other Region of Capture</button>
          <button>Show Seafloor Topography</button>
          <button>Search Web for Largest Recorded Catch of Species</button>
      </div>
    )
  }
};