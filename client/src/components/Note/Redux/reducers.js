const notes = (
  state = {
    isFetching: false,
    items: [],
  },
  action,
) => {
  switch (action.type) {
    case 'ADD_NOTES':
      return {
        ...state,
        items: [
          ...state.items,
          ...action.notes,
        ]
      };
    
    case 'ADD_NOTE':
      return {
        ...state,
        items: [
          action.note,
          ...state.items,
        ],
      };

    case 'ADD_NOTE_ITEM':
      const { noteItem } = action;
      const copiedItems = [ ...state.items ];
      copiedItems.find(note => note._id === action.noteId).noteItems.push(noteItem);
      const newState = {
        ...state,
        items: [ ...copiedItems ],
      };
      return newState;

    default:
      return state;
  }
}

export default notes;
