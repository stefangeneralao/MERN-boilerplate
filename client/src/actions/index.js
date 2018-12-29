import { api } from '../config';
import axios from 'axios';

export const addNotes = notes => ({
  type: 'ADD_NOTES',
  notes,
});

export const addNote = note => ({
  type: 'ADD_NOTE',
  note,
});

export const fetchNotes = () => (
  async dispatch => {
    try {
      const response = await axios.get(`${ api }/notes`);
      const notes = response.data.notes.map(note => ({
        ...note,
        textFieldValue: '',
      }));
      dispatch(addNotes(notes));
    } catch (error) {
      console.log('An error occurred.', error);
    }
  }
);

export const postNote = title => (
  async dispatch => {
    try {
      const response = await axios.post(
        `${ api }/note`,
        { note: { title } },
      );
      const { note } = response.data;
      dispatch(addNote(note));
    } catch (error) {
      console.log('An error occurred.', error);
    }
  }
);

export const setNewNoteValue = value => ({
  type: 'SET_NEW_NOTE_VALUE',
  value,
});

export const clearNewNoteValue = () => ({
  type: 'CLEAR_NEW_NOTE_VALUE',
});
