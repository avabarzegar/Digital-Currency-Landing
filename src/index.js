import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import React from 'react';
import App from './pages/Layout';
import './App.css';
import './index.css';
  
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
