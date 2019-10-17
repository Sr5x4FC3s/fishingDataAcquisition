import React from 'react';

import DisplayInformationCard from './displayInformationCard';

export default class IndividualDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      active: !this.state.active,
    }, () => this.props.toggleHandler('info_card'));
  };

  render() {
    const styles = {
      height: '100px',
      width: '100%',
      backgroundColor: 'red',
      border: 'solid',
      borderWidth: '1px',
      borderColor: 'black',
    };

    return (
      <div 
        style={styles} 
        onClick={() => {
            this.toggle()
            this.props.retrieveData(this.props.data)
        }}
      >
        <div>{this.props.information.date}</div>
        <div>{this.props.information.name}</div>
      </div> 
    )
  }
};