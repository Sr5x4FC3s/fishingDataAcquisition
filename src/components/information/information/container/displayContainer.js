import React from 'react';

import IndividualDisplay from '../individualDisplay';

    //sample data 
    // [{
    //   category,
    //   information: {}
    // }]

const styles = {
  height: '900px',
  width: '35%',
  float: 'left',
  backgroundColor: 'pink',
  zIndex: 20,
};

const mockData = [
  {
    category: 'mock_data',
    information: {date: 'fill', name: 'name', category: 'fill',}
  },
  {
    category: 'mock_data',
    information: {date: 'fill', name: 'name', category: 'fill',}
  },
  {
    category: 'mock_data',
    information: {date: 'fill', name: 'name', category: 'fill',}
  },
  {
    category: 'mock_data',
    information: {date: 'fill', name: 'name', category: 'fill',}
  },
];


const DisplayContainer = (props) => (
  <div style={styles}>
    <div>{props.category}</div>
    {/* {props.information.map(data => ( */}
    {mockData.map(data => (
      <IndividualDisplay
        type={data.category}
        information={data.information} 
      />
    ))}
  </div>
);

export default DisplayContainer;