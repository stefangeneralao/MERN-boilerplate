import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'components/App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import notes from 'components/Note/Redux/reducers';
import { combineReducers } from 'redux';
import { fetchNotes } from 'components/Note/Redux/thunks';

const rootReducer = combineReducers({ notes });
const composeEnhancers = composeWithDevTools({});
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunkMiddleware,
    ),
  ),
);

// Fetch initial data
store.dispatch(fetchNotes());

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
