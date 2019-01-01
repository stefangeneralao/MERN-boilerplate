import React from 'react';
import './NewNoteTextField.scss';

const TextField = ({ postNote }) => {
  const onSubmitHandler = e => {
    e.preventDefault();
    const { value } = e.currentTarget.textfield;
    postNote(value);
    e.currentTarget.textfield.value = '';
  }
  
  return (
    <div className="text-field">
      <form onSubmit={ onSubmitHandler }>
        <input
          type="text"
          name="textfield"
          id="textfield"
          placeholder="Create a note"
        />
      </form>
    </div>
  );
}

export default TextField;
