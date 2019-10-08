import React from 'react';

export default class IndividualDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: {
        date: false, 
        name: false,
        category: false,
      },
      information: {},
      active: false, 
    };
  }
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
      <div style={styles}>
      {/* test data*/}
      <div>{this.props.information.date}</div>
      <div>{this.props.information.name}</div>
      <div>{this.props.information.category}</div>
        {/* {this.state.display.date ? <div>date</div> : null}
        {this.state.display.name ? <div>name</div> : null}
        {this.state.display.category ? <div>category</div> : null} */}
      </div> 
    )
  }
}