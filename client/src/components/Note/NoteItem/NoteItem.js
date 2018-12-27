import React from 'react';

const NoteItem = ({ label, completed }) => (
  <div>
    <p>{ label }</p>
    { completed && <p>X</p>}
  </div>
);

export default NoteItem;