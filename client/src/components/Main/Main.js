import React from 'react';
import './Main.scss';
import Note from 'components/Note/Note';

const Main = ({ notes }) => (
  <main>
    { notes.map(({ title, noteItems, _id: id, textFieldValue }) => (
      <Note
        key={ id }
        id={ id }
        title={ title }
        noteItems={ noteItems }
        textFieldValue={ textFieldValue }
      />
    )) }
  </main>
);

export default Main;
