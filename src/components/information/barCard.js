import React from 'react';

export default class BarCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const styles = {
      width: '100px',
      height: '30px',
      backgroundColor: 'blue',
      float: 'left',
    };

    return (
      <div style={styles}>{this.props.value}</div>
    )
  }
};
