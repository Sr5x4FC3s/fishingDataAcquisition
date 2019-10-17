import React from 'react';

import IndividualDisplay from '../individualDisplay';

import { httpPost } from '../../../../../utility/apiUtility';

export default class DisplayContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      activeData: [],
    };
    
    this.retrieveInformation = this.retrieveInformation.bind(this);
    this.setCategory = this.setCategory.bind(this);
  }

  componentDidMount() {
    const coordinates = {coordinates: this.props.activeCoordinates};
    this.retrieveInformation();
    // fill in coordinates params with coordinates
  };

  retrieveInformation(coordinates) {
    return httpPost('/retrieveCoordinateInfo', {coordinates: [-123.39701543578857, 38.51652093448605]})
      .then(result => {
        this.setState({
          data: result.data,
        }, () => this.setCategory(this.props.selectedData))
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  };

  setCategory(type) {
    switch(type) {
      case('date'):
        this.setState({
          activeData: this.state.data.dates,
        });
        break;
      case('tackle'):
        this.setState({
          activeData: this.state.data.tackle,
        });
        break;
      case('bait'):
        this.setState({
          activeData: this.state.data.bait,
        });
        break;
    }
  };

  render() {
    const styles = {
      height: '900px',
      width: '35%',
      float: 'left',
      backgroundColor: 'pink',
      zIndex: 20,
    };

    return (
      <div style={styles}>
        {this.state.activeData.map(data => (
          <IndividualDisplay
            type={data.category}
            information={data.information} 
            data={data.information.data}
            toggleHandler={this.props.toggleHandler}
            retrieveData={this.props.retrieveData}
          />
        ))}
      </div>
    )
  }
};