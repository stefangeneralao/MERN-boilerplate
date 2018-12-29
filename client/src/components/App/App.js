import React from 'react';
import './App.scss';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Note from '../Note/Note';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    const { notes } = this.props;
    return (
      <div className="App">
        <Header>
        </Header>

        <div className="nav-pusher">
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
      </div>
    );
  }
}

export default App;
