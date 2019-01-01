import React from 'react';
import './App.scss';
import MainContainer from 'components/Main/MainContainer';
import Header from 'components/Header/Header';

const App = () => (
  <div className="App">
    <Header />
    <div className="nav-pusher">
      <MainContainer />
    </div>
  </div>
);

export default App;
