import React from 'react';
import NoteItem from './NoteItem/NoteItem';
import './Note.scss';
import NewItemTextFieldContainer from './NewItemTextField/NewItemTextFieldContainer';

const Note = ({ id, title, noteItems }) => (
  <div className="note">
    <h2>{ title }</h2>
    { noteItems.map(({ label, completed }, i) => (
      <NoteItem
        key={ `noteitem${ i }` }
        label={ label }
        completed={ completed }
      />
    )) }
    <NewItemTextFieldContainer id={ id } />
  </div>
);

export default Note;