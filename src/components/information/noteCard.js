import React from 'react';

const styles = {
  height: '50px',
  width: '294px',
  backgroundColor: 'purple',
};

const NoteCard = (props) => (
  <button style={styles} onClick={() => {
    props.change();
    props.retrieve(props.note.date, props.note.note);
  }}>{props.note.date}</button>
);

export default NoteCard;