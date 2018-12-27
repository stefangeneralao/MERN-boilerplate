import React from 'react';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <main>
        { this.props.children }
      </main>
    );
  }
}

export default Main;
