import React from 'react';
import './App.scss';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Note from '../Note/Note';
import TextField from '../NewNoteTextField/NewNoteTextFieldContainer';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    const { notes } = this.props;
    return (
      <div className="App">
        <Header>
          <TextField />
        </Header>

        <div className="nav-pusher">
          <Main>
            { notes.map(({ title, items, _id: id, textFieldValue }) => (
              <Note
                key={ id }
                id={ id }
                title={ title }
                items={ items }
                textFieldValue={ textFieldValue }
              />
            )) }
          </Main>
        </div>
      </div>
    );
  }
}

export default App;
