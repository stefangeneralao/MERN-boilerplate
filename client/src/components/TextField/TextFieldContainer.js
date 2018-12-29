import { connect } from 'react-redux';
import { addNotes } from '../../actions';
import TextField from './TextField';

const mapDispatchToProps = dispatch => ({
  addNote: title => dispatch(addNotes(title)),
});

export default connect(null, mapDispatchToProps)(TextField);