import React from 'react';
import NoteItem from './NoteItem/NoteItem';
import './Note.scss';
// import TextField from '../TextField/TextField';
import axios from 'axios';
import { api } from '../../config';

class Note extends React.Component {
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
    const { title, items, textFieldValue } = this.props;
    console.log('note props', this.props);
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
        <form onSubmit={ onSubmitHandler }>
          <input
            type="text"
            value={ textFieldValue }
            onChange={ onChangeHandler }
          />
        </form>
      </div>
    );
  }
}

export default Note;