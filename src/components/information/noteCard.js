import React from 'react';

const styles = {
  height: '50px',
  width: '294px',
  backgroundColor: 'purple',
};

const NoteCard = (props) => (
  <button style={styles}>{props.note.date}</button>
);

export default NoteCard;