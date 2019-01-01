import React from 'react';
import './Main.scss';
import Note from 'components/Note/Note';

const Main = ({ notes, isFetching, isFetchingFailed }) => {
  if (isFetching) {
    return <p>Loading notes</p>;
  }

  if (isFetchingFailed) {
    return <p>Fetching failed</p>;
  }

  return (
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
};

export default Main;
