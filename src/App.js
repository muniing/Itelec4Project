import './App.css';
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Login />
    <Signup />
    <Routes>
        <Route path='login' element={<Login />}></Route>
        <Route path='signup' element={<Signup />}></Route>
    </Routes>
    </>
  );
}

export default App;
