import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


//pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Login from './pages/authentication/Login';
import Logout from './pages/authentication/Logout';

//components
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';
import Register from './pages/authentication/Register';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavbarComponent></NavbarComponent>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/logout' element={<Logout />}></Route>
            <Route path='/register' element={<Register />}></Route>
          </Routes>
        </div>
        <FooterComponent></FooterComponent>
      </BrowserRouter>
    </>
  )
}

export default App
