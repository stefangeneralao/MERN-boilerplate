import React from 'react';
import NoteItem from './NoteItem/NoteItem';
import './Note.scss';
import TextField from '../TextField/TextField';
import axios from 'axios';
import { api } from '../../config';

class Note extends React.Component {
  constructor() {
    super();
    this.state = {
      textFieldValue: '',
    };
  }

  onChangeHandler = e => {
    const { value } = e.currentTarget;
    this.setState({ textFieldValue: value });
  }
  
  onSubmitHandler = e => {
    e.preventDefault();
    const { textFieldValue } = this.state;
    const { id } = this.props;
    if (textFieldValue) {
      axios.post(`${ api }/noteitem`, {
        noteId: id,
        label: textFieldValue,
      })
      .catch(() => {
        console.log(`Failed to post note item`);
      });
      this.clearTextField();
    }
  }
  
  clearTextField = () => {
    this.setState({ textFieldValue: '' });
  }
  
  render() {
    const { title, items } = this.props;
    const { textFieldValue } = this.state;
    const { onChangeHandler, onSubmitHandler } = this;
    return (
      <div className="note">
        <h2>{ title }</h2>
        { items.map(({ label, completed }, i) => (
          <NoteItem
            key={ `noteitem${ i }` }
            label={ label }
            completed={ completed }
          />
        )) }
        <TextField
          value={ textFieldValue }
          onChange={ onChangeHandler }
          onSubmit={ onSubmitHandler }
        />
      </div>
    );
  }
}

export default Note;