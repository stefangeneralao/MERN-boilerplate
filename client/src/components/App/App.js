import React from 'react';
import './App.scss';
import Main from 'components/Main/Main';
import Header from 'components/Header/Header';
import TextField from 'components/NewNoteTextField/NewNoteTextFieldContainer';
import Note from 'components/Note/Note';

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
