import { connect } from 'react-redux';
import Main from './Main';

const mapStateToProps = state => ({
  notes: state.notes.items,
});

export default connect(mapStateToProps)(Main);
