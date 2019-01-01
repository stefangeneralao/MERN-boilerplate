import { connect } from 'react-redux';
import NewItemTextField from './NewItemTextField';
import { submitNoteItem } from '../Redux/thunks';

const mapDispatchToProps = (dispatch, { id }) => ({
  onSubmit: label => dispatch(submitNoteItem(id, label)),
});

export default connect(null, mapDispatchToProps)(NewItemTextField);