import React from 'react';
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <header>
        <label htmlFor="textfield">
          <h1>Stiffe Keep</h1>
        </label>
        { this.props.children }
      </header>
    );
  }
}

export default Header;