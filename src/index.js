import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App.js';

document.body.classList.add('bg-blue-100');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
