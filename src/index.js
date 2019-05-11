import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let racerList = [
  {"name": "Mark", "time": "00:12.020"},
  {"name": "Jacob", "time": "00:12.020"},
  {"name": "Larry", "time": "00:12.020"},
  {"name": "Ayer", "time": "00:12.020"},
  {"name": "Jon", "time": "00:12.020"},
]

ReactDOM.render(<App racers={racerList}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
