import React from 'react';
import './Header.scss';
import NewNoteTextFieldContainer
  from 'components/Note/NewNoteTextField/NewNoteTextFieldContainer';

const Header = () => (
  <header>
    <label htmlFor="textfield">
      <h1>Stiffe Keep</h1>
    </label>
    <NewNoteTextFieldContainer />
  </header>
);

export default Header;