import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './page/Home.jsx'
import About from './page/About.jsx';
import NavComponents from './components/NavComponents.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
        <NavComponents />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
