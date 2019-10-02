import React from 'react';

export default class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      coordinates: null,
      isOpen: false,  
    }
  }

  componentDidMount() {
    this.setState({
      active: this.props.isActive,
      coordinates: this.props.value,
      isOpen: this.props.isOpen,
    }, () => console.log('state: ', this.state))
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
      fontSize: 8,
      float: 'left',
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginRight: '-50%',
      transform: `translate(-50%, -50%)`,
    };

    const closeButtonStyle = {
      float: 'right',
      width: '20px',
      height: '20px',
    };

    return (
      <div style={styles}>
        <div id={`${this.props.value}-tab`} style={wordStyle}>{this.props.value}</div>
        <button style={closeButtonStyle} onClick={() => this.props.removeActiveTab(this.state.coordinates)}>x</button>
      </div>
    )
  }
};