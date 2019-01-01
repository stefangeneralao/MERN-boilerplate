import React from 'react';
import './NoteItem.scss';

const NoteItem = ({ label, completed }) => {
  const className = `note-item${ completed ? ' completed' : '' }`;
  return (
    <div className={ className }>
      <p>{ label }</p>
    </div>
  )
};

export default NoteItem;