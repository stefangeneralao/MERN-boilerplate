const newNoteTextField = (state = '', action) => {
  switch (action.type) {
    case 'SET_NEW_NOTE_VALUE':
      return action.value;

    case 'CLEAR_NEW_NOTE_VALUE':
      return '';

    default:
      return state;
  }
}

export default newNoteTextField;