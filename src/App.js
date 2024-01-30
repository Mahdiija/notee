
import './App.css';

import { Route, Routes } from 'react-router-dom'
import { Startt } from './pages/Startt';
import { Otp } from './pages/Otp';
import { Login } from './pages/Login.jsx';
import { Home } from './pages/Home.jsx';
import React from 'react'


function App() {
  return (
    <Routes>
    <Route path='/' element={<Startt/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/Otp' element={<Otp/>}/>
    <Route path='/Home' element={<Home/>}/>

    
  </Routes>
  );
}

export default App;
