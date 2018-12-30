const notes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTES':
      return [
        ...state,
        ...action.notes,
      ];
    
    case 'ADD_NOTE':
      return [
        action.note,
        ...state,
      ];

    case 'ADD_NOTE_ITEM': {
      const newState = [ ...state ];
      newState.find(note => note._id === action.noteId).items.push(action.noteItem);
      return newState;
    }
      
    case 'SET_NEW_NOTE_ITEM_VALUE': {
      const newState = [ ...state ];
      newState.find(note => note._id === action.noteId).textFieldValue = action.label;
      return newState;
    }

    case 'CLEAR_NEW_NOTE_ITEM_VALUE': {
      const newState = [ ...state ];
      newState.find(note => note._id === action.noteId).textFieldValue = '';
      return newState;
    }

    default:
      return state;
  }
}

export default notes;
