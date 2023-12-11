import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import App from './App';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';
import { UserProvider } from './UserContext';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
    </UserProvider>
  </React.StrictMode>,rootElement
);

