import React from 'react';

const styles = {
  height: '50px',
  width: '294px',
  backgroundColor: 'purple',
};

const GenericCard = (props) => (
  <button style={styles} onClick={() => {
    props.action();
  }}>{props.date}</button>
);

export default GenericCard;