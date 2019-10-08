import React from 'react';

import IndividualDisplay from '../individualDisplay';

    //sample data 
    // [{
    //   category,
    //   information: {}
    // }]

const DisplayContainer = (props) => (
  <div>
    <div>{props.category}</div>
    {props.information.map(data => (
      <DisplayContainer
        type={data.category}
        information={data.information} 
      />
    ))}
  </div>
);

export default DisplayContainer;