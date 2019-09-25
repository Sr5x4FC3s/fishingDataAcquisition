import React from 'react';

export default class SpeciesInputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    // break into different forms - modular 
    // finish adding the rest of the info 
    return (
      <div id='species-input-container'>
        <form id='species-name-form'>
          <label>Species Name</label>
          <input type='text' placeholder='Enter Species Name'/>
          <button type='submit'>Search</button>
        </form>
        <div>Select Species</div>
        <ul>
          <li>category 1</li>  
          <li>category 2</li>  
          <li>category 3</li>  
          <li>category 4</li>  
        </ul>
        <form id='species-scientific-name'>
          <label>Species Scientific Name</label>
          <input type='text' placeholder='Enter Scientific Name'/>
          <label>label for all info needed for species information</label>
        </form>
        <div id='species-category'>Category</div>
        <ul>
          <li>category 1</li>  
          <li>category 2</li>  
          <li>category 3</li>  
          <li>category 4</li>  
        </ul>
        <div id='species-weight-range'>Weight Range</div>
        <ul>
          <li>category 1</li>  
          <li>category 2</li>  
          <li>category 3</li>  
          <li>category 4</li>  
        </ul>
        <div id='species-length-range'>Length Range</div>
        <ul>
          <li>category 1</li>  
          <li>category 2</li>  
          <li>category 3</li>  
          <li>category 4</li>  
        </ul>
        <div id='species-region'>Regions</div>
        <form>
          <label>Add Regions</label>
          <input type='text' placeholder='Add Region'/>
          <input type='submit'/>
        </form>
        <ul>
          <li>category 1</li>  
          <li>category 2</li>  
          <li>category 3</li>  
          <li>category 4</li>  
        </ul>
      </div>
    )
  }
};