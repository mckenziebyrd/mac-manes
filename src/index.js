import { AppBar } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import NavBar from './components/NavBar/NavBar';
import './index.css';
import { MacManes } from "./MacManes";
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
       <MacManes />
    </BrowserRouter>
 
    
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();