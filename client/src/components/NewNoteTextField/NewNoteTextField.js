import React from 'react';
import './NewNoteTextField.scss';

const TextField = ({ setValue, clearValue, value, postNote }) => {
  const onSubmitHandler = e => {
    e.preventDefault();
    postNote(value);
    clearValue();
  }

  const onChangeHandler = e => {
    const { value } = e.currentTarget;
    setValue(value);
  }
  
  return (
    <div className="text-field">
      <form onSubmit={ onSubmitHandler }>
        <input
          type="text"
          name="textfield"
          id="textfield"
          onChange={ onChangeHandler }
          value={ value }
          placeholder="Create a note"
        />
      </form>
    </div>
  );
}

export default TextField;
