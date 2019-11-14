import React from 'react';
import GenericCard from '../cards/genericCard';

const styles = {
  height: '300px',
  width: '300px', 
  backgroundColor: 'red',
};

const cardStyles = {
  paddingLeft: '3px',
};

const NotesListContainer = (props) => (
  <div id='note-list-container' style={styles}>
    {props.notes.map(note => (
      <div style={cardStyles}>
        <GenericCard 
          action={() => {
            props.change();
            props.retrieve(note.date, note.note);
          }}
          date={note.date}
        />
      </div>
    ))}
  </div>
);

export default NotesListContainer;