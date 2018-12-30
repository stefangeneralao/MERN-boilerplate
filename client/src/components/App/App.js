import React from 'react';
import './App.scss';
import Main from 'components/Main/Main';
import Header from 'components/Header/Header';
import axios from 'axios';
import { api } from 'config';
import TextField from 'components/TextField/TextField';
import Note from 'components/Note/Note';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      textFieldValue: '',
    };
  }
  
  componentDidMount() {
    this.fetchNotes();
  }
  
  fetchNotes = () => {
    axios.get(`${ api }/notes`)
      .then((res) => {
        const { notes } = res.data;
        console.log('notes', notes);
        this.setState({ notes });
      });
  }
  
  clearTextField = () => {
    this.setState({ textFieldValue: '' });
  }
  
  onSubmitHandler = e => {
    e.preventDefault();
    const { textFieldValue } = this.state;
    if (textFieldValue) {
      axios.post(`${ api }/note`, { note: { title: textFieldValue } })
        .then(() => {
          this.fetchNotes();
        })
        .catch(() => {
          console.log(`Failed to post note`);
        });
      this.clearTextField();
    }
  }

  onChangeHandler = e => {
    const { value } = e.currentTarget;
    this.setState({ textFieldValue: value });
  }
  
  render() {
    const { onSubmitHandler, onChangeHandler } = this;
    const { notes, textFieldValue } = this.state;
    console.log(notes);
    return (
      <div className="App">
        <Header>
          <TextField
            onSubmit={ onSubmitHandler }
            onChange={ onChangeHandler }
            value={ textFieldValue }
          />
        </Header>

        <Main>
          { notes.map(({ title, items, _id: id }) => (
            <Note
              key={ id }
              id={ id }
              title={ title }
              items={ items }
            />
          )) }
        </Main>
      </div>
    );
  }
}

export default App;
