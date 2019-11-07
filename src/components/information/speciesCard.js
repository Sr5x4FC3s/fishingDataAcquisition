import React from 'react';
import FormWithDropDown from '../header/dropDownMenuButton';
import DropDownMenuContainer from '../header/dropDownMenuContainer';
import NotesListContainer from './noteListContainer';

const SpeciesCard = (props) => (
  <div>
    <div>{`Name: ${props.information.speciesName}`}</div>
    <div>{`Scientific Name: ${props.information.scientificName}`}</div>
    <div>{`Weight Range: ${props.information.weight}`}</div>
    <div>{`Length Range: ${props.information.length}`}</div>
    <div>{`Category: ${props.information.category}`}</div>
    <div>{`Description: ${props.information.description}`}</div>
    <NotesListContainer
      notes={props.information.notes}
    /> 
    <FormWithDropDown 
      options={{
        dropDown: false, 
        search: false, 
        textArea: true, 
        submit: false, 
        date: false, 
        time: false, 
      }}
      category={`Specific Species Note`}
      placeholder={'Add Notes...'}
      dropDown={[]}
      type={'NOTES'}
      capture={props.captureValue}
    />  
  </div>
);

export default SpeciesCard;