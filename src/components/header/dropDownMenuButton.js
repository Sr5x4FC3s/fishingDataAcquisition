import React from 'react';

export default class DropDownMenuButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const styles = {
      width: '200px',
      height: '50px',
    };

    return (
      <div styles={styles}>{this.props.value}</div>
    )
  }
};

