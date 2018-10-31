
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import Model from './models/Model';

const store = new Model();

ReactDOM.render(
  <App store={store}/>, 
  document.getElementById('root')
);
registerServiceWorker();
