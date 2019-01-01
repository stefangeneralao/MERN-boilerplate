import { connect } from 'react-redux';
import { postNote } from '../Redux/thunks';
import TextField from './NewNoteTextField';

const mapDispatchToProps = dispatch => ({
  postNote: title => dispatch(postNote(title)),
});

export default connect(null, mapDispatchToProps)(TextField);