import React from 'react';

const NewItemTextField = ({ noteId, value, onSubmit, onChange, clearTextField }) => {
  const onSubmitHandler = e => {
    e.preventDefault();
    onSubmit(noteId, value);
    clearTextField(noteId);
  };

  const onChangeHandler = e => {
    const { value } = e.currentTarget;
    onChange(noteId, e.currentTarget.value);
  }
  
  return (
    <form onSubmit={ onSubmitHandler }>
      <input type="text" onChange={ onChangeHandler } value={ value } />
    </form>
  );
};

export default NewItemTextField;