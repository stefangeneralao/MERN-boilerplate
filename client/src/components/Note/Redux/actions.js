export const addNotes = notes => ({
  type: 'ADD_NOTES',
  notes,
});

export const addNote = note => ({
  type: 'ADD_NOTE',
  note,
});

export const setNewNoteValue = value => ({
  type: 'SET_NEW_NOTE_VALUE',
  value,
});

export const clearNewNoteValue = () => ({
  type: 'CLEAR_NEW_NOTE_VALUE',
}); 

export const addNoteItem = (noteId, noteItem) => ({
  type: 'ADD_NOTE_ITEM',
  noteId,
  noteItem,
});