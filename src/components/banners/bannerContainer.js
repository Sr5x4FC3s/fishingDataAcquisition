import React from 'react';
import DatabaseBanner from './dbBanner'; 

export default class BannerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      failedDatabase: false, 
      databaseIsLoading: false, 
      loadingResults: false, 
    }

    this.removeBanner = this.removeBanner.bind(this);
    this.currentlyLoadingDB = this.currentlyLoadingDB.bind(this);
  }

  componentDidMount() {
    if (this.props.databaseStatus) {
      this.setState({
        failedDatabase: true,
      })
    }
  }

  currentlyLoadingDB() {
    this.setState({
      databaseIsLoading: !this.state.databaseIsLoading,
    })
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
            loading={this.state.databaseIsLoading}
            loadResults={this.state.loadingResults}
            reset={() => {
              this.props.reset();
              this.currentlyLoadingDB();
            }} 
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