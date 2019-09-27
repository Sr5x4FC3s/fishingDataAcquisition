import React from 'react';

export default class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false, 
    }
  }

  render() {
    const styles = {
      width: '100px',
      height: '40px',
      backgroundColor: 'blue',
      opacity: '0.5',
    };

    return (
      <div style={styles}>
        <div id={`${this.props.value}-tab`}>{this.props.value}</div>
        <div onClick={this.props.close}>x</div>
      </div>
    )
  }
};