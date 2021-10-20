import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const data = [
  {"name": "Barbell Press", "repType": "Weight"},
  {"name": "Crunch", "repType": "Time"}
];

ReactDOM.render(
  <React.StrictMode>
      <App data={data}/>
  </React.StrictMode>,
  document.getElementById('root')
);