import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import React, { useContext } from 'react';
import App from './pages/Layout';
import './context/i18n';
import './App.css';
import './index.css';
import Theme, { ThemeContext } from './context/Theme';
import { ThemeProvider } from '@mui/material';



function RootProject(){
  const context = useContext(ThemeContext);
 console.log(context.newTheme);
  return (
    <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={context.newTheme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
  )
}

ReactDOM.render(
 <Theme>
    <RootProject />
 </Theme>,
  document.getElementById("root")
)
