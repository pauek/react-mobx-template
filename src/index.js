
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Store from './models/Store';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = new Store();

ReactDOM.render(
  <App store={store}/>, 
  document.getElementById('root')
);
registerServiceWorker();
