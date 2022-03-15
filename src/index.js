import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import React, { useContext } from 'react';
import App from './pages/Layout';
import './context/i18n';
// import i18n from "i18next";
// import {  initReactI18next } from "react-i18next";
// import LanguageDetector from 'i18next-browser-languagedetector';
// import HttpApi from 'i18next-http-backend';
import './App.css';
import './index.css';

// i18n
//   .use(initReactI18next) 
//   .use(LanguageDetector)
//   .use(HttpApi)
//   .init({
    
//     fallbackLng: "en",
      
//     detection:{
//       order: [ 'cookie','htmlTag', 'localStorage', 'sessionStorage', 'path', 'subdomain'],
//       caches:['cookie'],
//     },
//     backend:{
//       loadPath: '/assets/locales/{{lng}}/translation.json',

//     },
//     react:{useSuspense:false}

   
//   });


// import Theme, { ThemeContext } from './context/Theme';
// import { ThemeProvider } from '@mui/material';



function RootProject(){
//   const context = useContext(ThemeContext);
//  console.log(context.newTheme);
  return (
    <React.StrictMode>
    <BrowserRouter>
      {/* <ThemeProvider theme={context.newTheme}> */}
        <App />
      {/* </ThemeProvider> */}
    </BrowserRouter>
  </React.StrictMode>
  )
}

ReactDOM.render(
//  <Theme>
    <RootProject />,
//  </Theme>
  document.getElementById("root")
)
