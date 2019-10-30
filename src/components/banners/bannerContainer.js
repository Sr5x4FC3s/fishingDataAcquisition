import React from 'react';
import DatabaseBanner from './dbBanner'; 

export default class BannerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      failedDatabase: false, 
      loadingResults: false, 
    }

    this.removeBanner = this.removeBanner.bind(this);
  }

  componentDidMount() {
    if (this.props.databaseStatus) {
      this.setState({
        failedDatabase: true,
      })
    }
  }

  removeBanner() {
    this.setState({
      failedDatabase: false, 
    });
  }

  render() {    
    return (
      <div>
        {this.state.failedDatabase ? 
          <DatabaseBanner 
            loading={this.props.dbActivelyLoading}
            // loadResults={this.state.loadingResults}
            loadStatus={this.props.loadStatus}
            reset={this.props.reset} 
            dismiss={() => {
              this.props.dismiss();
              this.removeBanner();
            }}
          /> 
          : null}
      </div>
    )
  }
};