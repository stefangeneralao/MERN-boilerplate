const notes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTES':
      console.log(action.notes);
      return [
        ...state,
        ...action.notes,
      ];

    default:
      return state;
  }
}

export default notes;
