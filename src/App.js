import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Exchange from './pages/Exchange';
import Mobile from './pages/Mobile';
import Withdraw from './pages/Withdraw';
import Deposit from './pages/Deposit';
import Market from './pages/Market';

// import 'bootstrap/dist/css/bootstrap.min.css';
  
const App = () =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Market" element={<Market />} />
          <Route path="Exchange" element={<Exchange />} />
          <Route path="Deposit" element={<Deposit />} />
          <Route path="Withdraw" element={<Withdraw />} />
          <Route Mobile="Exchange" element={<Mobile />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
    // <>
    //   <ResponsiveAppBar />         
    // </>
  );
}
  
export default App;

