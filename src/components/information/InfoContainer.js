import React from 'react';

import BarContainer from './barContainer';
import InformationCard from './card';

const styles = {
  width: '90%',
  height: '1000px',
  marginLeft: '5%',
  marginRight: '5%',
  backgroundColor: 'pink',
  marginTop:'.1%',
};

export default class InformationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '',
      cardList: [],
    };
  }

  render() {
    return (
      <div style={styles}>
        <BarContainer />
        <InformationCard />
      </div>
    )
  }
};