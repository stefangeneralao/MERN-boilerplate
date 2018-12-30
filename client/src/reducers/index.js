import { combineReducers } from 'redux';
import notes from './notes';
import newNoteTextField from './newNoteTextField';

export default combineReducers({ notes, newNoteTextField });