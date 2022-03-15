import {  initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import i18n from "i18next";


i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    
    fallbackLng: "en",
    // lng 
    detection:{
      order: [ 'cookie','htmlTag', 'localStorage', 'sessionStorage', 'path', 'subdomain'],
      caches:['cookie'],
    },
    backend:{
      loadPath: '/assets/locales/{{lng}}/translation.json',

    },
    react:{useSuspense:false}

   
  });
export default i18n;