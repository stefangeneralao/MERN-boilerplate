import { connect } from 'react-redux';
import { fetchNotes } from '../../actions';
import App from './App';

const mapStateToProps = state => {
  return {
    notes: state.notes,
  }
};

const mapDispatchToProps = dispatch => ({
  fetchNotes: notes => dispatch(fetchNotes(notes)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
