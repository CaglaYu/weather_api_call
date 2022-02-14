import React from 'react';
import Main  from './Components/Main';
import Footer  from './Components/Footer';
import Login from './Components/Login';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsiveAppBar from './Components/AppBar';
import { Route, Routes } from "react-router-dom";


export default function App() {
  return (
      <div >
          <ResponsiveAppBar />
          <Main />
          <Footer/>
         
      </div>
  )
}

