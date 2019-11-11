import React from 'react';

export default class DisabledButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const styles = {
      width: '200px',
      height: '100%',
      backgroundColor: 'white',
    };

    return (
      <button id={this.props.name} style={styles} disabled>{this.props.name}</button>
    )
  }
};