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
      position: 'relative',
    };

    const wordStyle = {
      float: 'left',
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginRight: '-50%',
      transform: `translate(-50%, -50%)`
    };

    const closeButtonStyle = {
      float: 'right',
    };

    return (
      <div style={styles}>
        <div id={`${this.props.value}-tab`} style={wordStyle}>{this.props.value}</div>
        <div onClick={this.props.close} style={closeButtonStyle}>x</div>
      </div>
    )
  }
};