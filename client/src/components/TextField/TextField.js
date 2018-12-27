import React from 'react';
import './TextField.scss';

class TextField extends React.Component {
  render() {
    const { onSubmit, onChange, value } = this.props;
    return (
      <div className="text-field">
        <form onSubmit={ onSubmit }>
          <input
            type="text"
            name="textfield"
            id="textfield"
            onChange={ onChange }
            value={ value }
            placeholder="Create a note"
          />
        </form>
      </div>
    );
  }
}

export default TextField;