import { AppBar } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './DateTimePicker';
import NavBar from './components/NavBar/NavBar';
import './index.css';
import { MacManes } from "./MacManes";
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <MacManes />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();