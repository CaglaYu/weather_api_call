import React from 'react';
import Footer  from './Components/Footer';
import { Routes, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsiveAppBar from './Components/AppBar';
import Login from './Components/Login';
import Home from './Components/Home';



export default function App() {
  return (
      <div >
          <ResponsiveAppBar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
          </Routes>
          <Footer/>
         
      </div>
  )
}

