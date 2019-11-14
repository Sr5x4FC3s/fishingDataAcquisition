import React, { useState } from 'react';
import FormWithDropDown from '../../../header/dropDownMenuButton';
import DropDownMenuContainer from '../../../header/dropDownMenuContainer';
import NotesListContainer from '../container/noteListContainer';
import GenericButton from '../../../header/button';
import DisabledButton from '../../../header/disabledButton';

const SpeciesCard = (props) => {
  const [isOpen, change] = useState(false);
  const [information, setInformation] = useState({});
  const [isRendered, setRenderStatus] = useState(false);

  const retrieveInformation = (date, note) => {
    setInformation({
      date: date,
      note: note,
    });

    setRenderStatus(true);
  };

  return (
    <div>
      <div>{`Name: ${props.information.speciesName}`}</div>
      <div>{`Scientific Name: ${props.information.scientificName}`}</div>
      <div>{`Weight Range: ${props.information.weight}`}</div>
      <div>{`Length Range: ${props.information.length}`}</div>
      <div>{`Category: ${props.information.category}`}</div>
      <div>{`Description: ${props.information.description}`}</div>
      {!isOpen && props.information.notes.length > 1 ? 
        <GenericButton 
          action={
            () => {
              change(!isOpen);
            }
          }
          name={'Notes'}
        />
        : !isOpen && props.information.notes.length < 1 ?
        <DisabledButton
          name={'Notes'}
        />
        :
        <NotesListContainer
          notes={props.information.notes}
          change={() => change(!isOpen)}
          retrieve={retrieveInformation}
        /> 
      }
      {isRendered ? 
        <div>
          <div>{`Date: ${information.date}`}</div>
          <div>{`Note: ${information.note}`}</div>
        </div> 
        : 
        null
      }
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
      <GenericButton 
        action={
          () => console.log('API call to retrieve more information on a specific species')
        }
        name={'More Information'}
      />
    </div>
  )
};

export default SpeciesCard;