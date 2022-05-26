import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from './components/Main';
import './index.css';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
  <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);

// flow : Createarea.js=>Card.js=>Notes.js=>Main.js=>index.js
reportWebVitals();
