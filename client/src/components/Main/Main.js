import React from 'react';
import './Main.scss';
import Note from 'components/Note/Note';

const Main = ({ notes }) => (
  <main>
    { notes.map(({ title, items, _id: id, textFieldValue }) => (
      <Note
        key={ id }
        id={ id }
        title={ title }
        items={ items }
        textFieldValue={ textFieldValue }
      />
    )) }
  </main>
);

export default Main;
