import { connect } from 'react-redux';
import Main from './Main';

const mapStateToProps = state => ({
  notes: state.notes.items,
  isFetching: state.notes.isFetching,
  isFetchingFailed: state.notes.isFetchingFailed,
});

export default connect(mapStateToProps)(Main);
