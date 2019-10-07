import React from 'react';

const SaveButton = (props) => (
  <button onClick={() => props.save(props.state, props.type)}>Submit</button>
);

export default SaveButton;