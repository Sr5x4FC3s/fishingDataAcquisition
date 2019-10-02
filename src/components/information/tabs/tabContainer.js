import React from 'react';

import Tab from './tab';

export default class TabContainer extends React.Component {
  constructor(props) {
    super(props);

  }

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
            <Tab 
              value={tab.coordinates} 
              isActive={tab.info.state}
              isOpen={tab.info.isOpen}
              removeActiveTab={this.props.removeActiveTab}
            />
          </div>
        ))}
      </div>
    )
  }
};