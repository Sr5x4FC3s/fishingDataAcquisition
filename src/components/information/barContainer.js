import React from 'react';

import BarCard from './barCard';

const styles = {
  width: '100%',
  height: '30px',
  backgroundColor: 'white',
};

const barCardList = ['one', 'two', 'three', 'four', 'five'];

const BarContainer = (props) => (
  <div style={styles}>
    {barCardList.map(card => (
      <BarCard value={card}/>
    ))}
  </div>
);

export default BarContainer;