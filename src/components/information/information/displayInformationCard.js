import React from 'react';

const styles = {
  height: '200px',
  width: '200px',
  backgroundColor: 'black',
  zIndex: 30, 
  float: 'right', 
};

const DisplayInformationCard = (props) => (
  <div style={styles}>
    {/*remove these divs when done testing*/}
    <div style={{color:'white'}}>{props.infoCardData.some}</div>
    <div style={{color:'white'}}>{props.infoCardData.of}</div>
  </div>
);

export default DisplayInformationCard;