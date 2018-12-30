import React from 'react';

const NewItemTextField = ({ onSubmit }) => {
  const onSubmitHandler = e => {
    e.preventDefault();
    const { value } = e.target.noteItemField;
    onSubmit(value);
    e.target.noteItemField.value = '';
  };
  
  return (
    <form onSubmit={ onSubmitHandler }>
      <input
        type="text"
        name="noteItemField"
        readOnly={ false }
      />
    </form>
  );
};

export default NewItemTextField;