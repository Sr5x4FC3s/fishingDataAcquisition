import React from 'react';

import Tab from './tab';

export default class TabContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabs: [{active: false, name: 'option'},{active: false, name: 'option'},{active: false, name: 'option'}], // {active:true/false, name:tab_name}
    };

    this.closeTab = this.closeTab.bind(this);
  }

  closeTab() {
    //edit
    alert('closed')
  };

  render() {
    const styles = {
      width: '100%',
    };

    const tabStyle = {
      float: 'left',
    }

    return (
      <div id='tab-container' style={styles}>
        {this.state.activeTabs.map(tab => (
          <div style={tabStyle}>
          <Tab value={tab.name} close={this.closeTab} />
          </div>
        ))}
      </div>
    )
  }
};