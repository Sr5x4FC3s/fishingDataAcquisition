import React from 'react';

const SaveButton = (props) => (
  <button onClick={() => props.save(props.state, props.type)}>Save</button>
);

export default SaveButton;