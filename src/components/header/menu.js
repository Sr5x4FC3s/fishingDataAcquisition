import React from 'react';

export default class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const styles = {
      width: '50px',
      height: '50px',
    };

    return (
      <div style={styles} onClick={this.props.show}>
        ===
        <img/>
      </div>
    )
  }
};

