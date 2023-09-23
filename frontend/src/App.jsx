/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

function App() {

  return (
    <>
        <BrowserRouter>
          <Navbar />  
          <Routes>         
            <Route path="/" element={<Home />} exact ></Route>
            <Route path="/signUp" element={<SignUp />}  ></Route>
            <Route path="/login" element={<Login />} ></Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
