import React from 'react';

export default class GenericButton extends React.Component {
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
      <button id={this.props.name}  style={styles} onClick={this.props.action}>{this.props.name}</button>
    )
  }
};

