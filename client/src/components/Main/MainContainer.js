import { connect } from 'react-redux';
import Main from './Main';

const mapStateToProps = state => ({
  notes: state.notes.items,
  isFetching: state.notes.isFetching,
});

export default connect(mapStateToProps)(Main);
