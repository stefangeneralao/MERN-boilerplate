import { connect } from 'react-redux';
import { postNote, setNewNoteValue, clearNewNoteValue } from '../../actions';
import TextField from './NewNoteTextField';

const mapStateToProps = state => ({
  value: state.newNoteTextField,
});

const mapDispatchToProps = dispatch => ({
  postNote: title => dispatch(postNote(title)),
  setValue: value => dispatch(setNewNoteValue(value)),
  clearValue: () => dispatch(clearNewNoteValue()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TextField);