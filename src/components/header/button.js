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
      float: 'right',
      backgroundColor: 'white',
    };

    return (
      <div style={styles}>
        <a id={this.props.value}>{this.props.value}</a>
      </div>
    )
  }
};

