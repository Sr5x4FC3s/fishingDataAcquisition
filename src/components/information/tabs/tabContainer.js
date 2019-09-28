import React from 'react';

import Tab from './tab';

export default class TabContainer extends React.Component {
  constructor(props) {
    super(props);

    this.closeTab = this.closeTab.bind(this);
  }

  closeTab() {
    //edit
    alert('closed')
  };

  render() {
    // render final tab when open tabs >= 8 + how ever many others are open that is clickable to expand all options 
    const styles = {
      width: '100%',
    };

    const tabStyle = {
      float: 'left',
    }

    return (
      <div id='tab-container' style={styles}>
        {this.props.activeTabs.map(tab => (
          <div style={tabStyle}>
          <Tab value={tab.info} close={this.closeTab} />
          </div>
        ))}
      </div>
    )
  }
};