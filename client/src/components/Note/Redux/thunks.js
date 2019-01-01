import axios from 'axios';
import { api } from 'config';
import { addNotes, addNote, addNoteItem } from './actions';

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

export const submitNoteItem = (noteId, label) => (
  async dispatch => {
    try {
      const response = await axios.post(
        `${ api }/noteitem`,
        {
          noteId,
          label,
        },
      );
      const { noteItem } = response.data;
      dispatch(addNoteItem(noteId, noteItem));
    } catch (error) {
      console.log('An error occurred.', error);
    }
  }
);