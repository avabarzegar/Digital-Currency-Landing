import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import React, { useContext,Suspense } from 'react';
import App from './pages/Layout';
import './context/i18n';
import './App.css';
import './index.css';
import Theme, { ThemeContext } from './context/Theme';
import { ThemeProvider } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';




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

const LoadingMarkUp=(
  <Box sx={{ display: 'flex' }}>
      <CircularProgress sx={{color:'#F1B80A'}} />
    </Box>
)


ReactDOM.render(
 <Suspense fallback={LoadingMarkUp}>
   <Theme>
    <RootProject />
 </Theme>
 </Suspense>,
  document.getElementById("root")
)
