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

    default:
      return state;
  }
}

export default notes;
