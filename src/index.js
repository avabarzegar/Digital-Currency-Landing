import './App.css';
import './index.css';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import React from 'react';
import App from './pages/Layout';

  
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
