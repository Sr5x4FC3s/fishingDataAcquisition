import React from 'react';

export default class SpeciesInputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id='species-input-container'>
        <form id='species-input-form'>
          <label>Species Name</label>
          <input type='text' placeholder='Enter Species Name'/>
          <button type='submit'>Search</button>
          <label>Species Scientific Name</label>
          <input type='text' placeholder='Enter Scientific Name'/>
          <label>label for all info needed for species information</label>
        </form>
      </div>
    )
  }
};