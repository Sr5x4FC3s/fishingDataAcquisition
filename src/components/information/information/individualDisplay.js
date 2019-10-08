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
    return (
      <div>
        {this.state.display.date ? <div>date</div> : null}
        {this.state.display.name ? <div>name</div> : null}
        {this.state.display.category ? <div>category</div> : null}
      </div> 
    )
  }
}