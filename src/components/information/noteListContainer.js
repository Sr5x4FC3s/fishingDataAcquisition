import React from 'react';
import NoteCard from './noteCard';


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
        <NoteCard 
          note={note} 
          change={props.change}
          retrieve={props.retrieve}
        />
      </div>
    ))}
  </div>
);

export default NotesListContainer;