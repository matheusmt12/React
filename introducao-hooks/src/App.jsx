import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Link , Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About'
function App() {

  return (
    <>
      <BrowserRouter>
      <h1>React com Hooks</h1>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/about'}>Ablut</Link>
          </li>
        </ul>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
