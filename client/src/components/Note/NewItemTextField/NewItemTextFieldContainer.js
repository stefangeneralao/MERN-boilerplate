import { connect } from 'react-redux';
import NewItemTextField from './NewItemTextField';
import { submitNoteItem, setNewNoteItemValue, clearNewNoteItemValue } from '../../../actions';

const mapStateToProps = (state, { id }) => ({
  value: state.notes.find(note => note._id === id).textFieldValue,
  noteId: id,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (id, label) => dispatch(submitNoteItem(id, label)),
  onChange: (id, label) => dispatch(setNewNoteItemValue(id, label)),
  clearTextField: noteId => dispatch(clearNewNoteItemValue(noteId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewItemTextField);